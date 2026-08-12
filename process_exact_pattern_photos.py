import os
from PIL import Image

workspace = r"d:\Kerja Praktik\Laporan selama Kerja Praktik\Day-2\Prototype Project\Mahallu Shop"
brain_dir = r"C:\Users\THINKPAD\.gemini\antigravity-ide\brain\a5dfde08-336f-4bfe-ab6d-956d4845aa24"
assets_dir = os.path.join(workspace, "assets")

model_mappings = {
    "annisa_maroon_no_phone": "prod-annisa-exact-model.jpg",
    "yasmin_tara_no_phone": "prod-yasmin-exact-model.jpg",
    "black_pearl_no_phone": "prod-black-pearl-exact-model.jpg",
    "karina_brown_no_phone": "prod-karina-exact-model.jpg"
}

for brain_file in os.listdir(brain_dir):
    for key, target_fname in model_mappings.items():
        if brain_file.startswith(key) and brain_file.endswith(".png"):
            src_path = os.path.join(brain_dir, brain_file)
            img = Image.open(src_path)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            dst_path = os.path.join(assets_dir, target_fname)
            img.save(dst_path, quality=96)
            print(f"Saved {brain_file} -> {target_fname}")

print("Exact pattern photo processing complete.")
