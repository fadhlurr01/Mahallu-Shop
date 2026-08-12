import os
import shutil
from PIL import Image

workspace = r"d:\Kerja Praktik\Laporan selama Kerja Praktik\Day-2\Prototype Project\Mahallu Shop"
brain_dir = r"C:\Users\THINKPAD\.gemini\antigravity-ide\brain\a5dfde08-336f-4bfe-ab6d-956d4845aa24"
kebutuhan_dir = os.path.join(workspace, "kebutuhan lainnya")
assets_dir = os.path.join(workspace, "assets")

# 1. Process WhatsApp Image 2026-08-12 at 20.20.56.jpeg
wa_file = os.path.join(kebutuhan_dir, "WhatsApp Image 2026-08-12 at 20.20.56.jpeg")
if os.path.exists(wa_file):
    img = Image.open(wa_file)
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    target_path = os.path.join(assets_dir, "prod-yasmin-tara-wa.jpg")
    img.save(target_path, quality=98)
    print("Saved prod-yasmin-tara-wa.jpg")

# 2. Copy generated professional model images into assets
model_mappings = {
    "prod_annisa_maroon_model": "prod-annisa-maroon-model.jpg",
    "prod_yasmin_tara_model": "prod-yasmin-tara-model.jpg",
    "prod_karina_brown_model": "prod-karina-lace-brown-model.jpg",
    "prod_black_pearl_model": "dress-black-pearl-model.jpg"
}

for brain_file in os.listdir(brain_dir):
    for key, target_fname in model_mappings.items():
        if brain_file.startswith(key) and brain_file.endswith(".png"):
            src_path = os.path.join(brain_dir, brain_file)
            img = Image.open(src_path)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            dst_path = os.path.join(assets_dir, target_fname)
            img.save(dst_path, quality=95)
            print(f"Copied {brain_file} -> {target_fname}")

print("Model and WA photo processing complete.")
