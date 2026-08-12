import os
from PIL import Image

workspace = r"d:\Kerja Praktik\Laporan selama Kerja Praktik\Day-2\Prototype Project\Mahallu Shop"
assets_dir = os.path.join(workspace, "assets")
kebutuhan_dir = os.path.join(workspace, "kebutuhan lainnya")

print("--- ASSETS ---")
for f in os.listdir(assets_dir):
    if f.endswith((".jpg", ".png", ".jpeg")):
        p = os.path.join(assets_dir, f)
        img = Image.open(p)
        print(f"{f}: {img.size}")

print("\n--- KEBUTUHAN LAINNYA ---")
for f in os.listdir(kebutuhan_dir):
    if f.endswith((".jpg", ".png", ".jpeg")):
        p = os.path.join(kebutuhan_dir, f)
        img = Image.open(p)
        print(f"{f}: {img.size}")
