#!/usr/bin/env python3
"""
compress.py - Compress images and files
Usage:
  python compress.py image.jpg
  python compress.py document.pdf
  python compress.py myfolder/
  python compress.py file1.jpg file2.png file3.pdf
"""

import os
import sys
import zipfile
from pathlib import Path
from PIL import Image

# ─── Compression Settings ───────────────────────────────────
IMAGE_QUALITY   = 60   # Image quality (0-100), lower = more compression
IMAGE_MAX_SIZE  = None # Example: (1920, 1080) to resize, None = keep original
ZIP_COMPRESSION = zipfile.ZIP_DEFLATED

# Supported image extensions
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".bmp", ".tiff", ".webp", ".gif"}


def format_size(size_bytes):
    """Convert size in bytes to a human-readable string"""
    if size_bytes < 1024:
        return f"{size_bytes} B"
    elif size_bytes < 1024 ** 2:
        return f"{size_bytes / 1024:.1f} KB"
    else:
        return f"{size_bytes / (1024**2):.2f} MB"


def compress_image(input_path: Path):
    """Compress a single image file"""
    ext = input_path.suffix.lower()

    # PNG is converted to JPG for better compression
    if ext == ".png":
        output_path = input_path.with_stem(input_path.stem + "_compressed").with_suffix(".jpg")
    else:
        output_path = input_path.with_stem(input_path.stem + "_compressed")

    original_size = input_path.stat().st_size
    img = Image.open(input_path)

    # Convert RGBA or Palette modes to RGB (required for JPEG saving)
    if img.mode in ("RGBA", "P", "LA"):
        background = Image.new("RGB", img.size, (255, 255, 255))
        if img.mode == "P":
            img = img.convert("RGBA")
        background.paste(img, mask=img.split()[-1] if img.mode in ("RGBA", "LA") else None)
        img = background
    elif img.mode != "RGB":
        img = img.convert("RGB")

    # Resize if IMAGE_MAX_SIZE is set
    if IMAGE_MAX_SIZE:
        img.thumbnail(IMAGE_MAX_SIZE, Image.LANCZOS)

    img.save(output_path, format="JPEG", quality=IMAGE_QUALITY, optimize=True)

    compressed_size = output_path.stat().st_size
    saved = original_size - compressed_size
    percent = (saved / original_size * 100) if original_size > 0 else 0

    print(f"  [image]  {input_path.name}")
    print(f"    Before  : {format_size(original_size)}")
    print(f"    After   : {format_size(compressed_size)}")
    print(f"    Saved   : {format_size(saved)} ({percent:.1f}%)")
    print(f"    Output  : {output_path.name}")
    return saved


def compress_file(input_path: Path):
    """Compress a regular file using ZIP"""
    output_path = input_path.with_name(input_path.name + ".zip")
    original_size = input_path.stat().st_size

    with zipfile.ZipFile(output_path, "w", ZIP_COMPRESSION) as zf:
        zf.write(input_path, input_path.name)

    compressed_size = output_path.stat().st_size
    saved = original_size - compressed_size
    percent = (saved / original_size * 100) if original_size > 0 else 0

    print(f"  [file]   {input_path.name}")
    print(f"    Before  : {format_size(original_size)}")
    print(f"    After   : {format_size(compressed_size)}")
    print(f"    Saved   : {format_size(saved)} ({percent:.1f}%)")
    print(f"    Output  : {output_path.name}")
    return saved


def compress_folder(folder_path: Path):
    """Compress an entire folder into a ZIP archive"""
    output_path = folder_path.with_name(folder_path.name + ".zip")

    # Calculate original total size
    original_size = sum(
        f.stat().st_size for f in folder_path.rglob("*") if f.is_file()
    )

    with zipfile.ZipFile(output_path, "w", ZIP_COMPRESSION) as zf:
        for file in folder_path.rglob("*"):
            if file.is_file():
                zf.write(file, file.relative_to(folder_path.parent))

    compressed_size = output_path.stat().st_size
    saved = original_size - compressed_size
    percent = (saved / original_size * 100) if original_size > 0 else 0

    print(f"  [folder] {folder_path.name}/")
    print(f"    Before  : {format_size(original_size)}")
    print(f"    After   : {format_size(compressed_size)}")
    print(f"    Saved   : {format_size(saved)} ({percent:.1f}%)")
    print(f"    Output  : {output_path.name}")
    return saved


def process(path_str: str):
    """Process a single input (image / file / folder)"""
    p = Path(path_str)

    if not p.exists():
        print(f"  [error]  Not found: {path_str}")
        return 0

    if p.is_dir():
        return compress_folder(p)
    elif p.suffix.lower() in IMAGE_EXTENSIONS:
        return compress_image(p)
    else:
        return compress_file(p)


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(0)

    print("=" * 45)
    print("        MediaPress - File Compressor")
    print("=" * 45)

    inputs = sys.argv[1:]
    total_saved = 0

    for item in inputs:
        print()
        total_saved += process(item)

    print()
    print("=" * 45)
    print(f"  Total saved: {format_size(total_saved)}")
    print("=" * 45)


if __name__ == "__main__":
    main()
