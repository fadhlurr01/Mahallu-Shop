import os
from PIL import Image

workspace = r"d:\Kerja Praktik\Laporan selama Kerja Praktik\Day-2\Prototype Project\Mahallu Shop"
brain_dir = r"C:\Users\THINKPAD\.gemini\antigravity-ide\brain\a5dfde08-336f-4bfe-ab6d-956d4845aa24"
assets_dir = os.path.join(workspace, "assets")

for brain_file in os.listdir(brain_dir):
    if brain_file.startswith("yasmin_tara_wa_model_hd") and brain_file.endswith(".png"):
        src_path = os.path.join(brain_dir, brain_file)
        img = Image.open(src_path)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        dst_path1 = os.path.join(assets_dir, "prod-yasmin-tara-hd.jpg")
        dst_path2 = os.path.join(assets_dir, "prod-yasmin-tara.jpg")
        img.save(dst_path1, quality=98)
        img.save(dst_path2, quality=98)
        print(f"Saved HD Card 2 image: {img.size} to prod-yasmin-tara-hd.jpg and prod-yasmin-tara.jpg")

print("Processing complete.")
