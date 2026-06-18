import os

EXCLUDE_DIRS = {
    "node_modules", ".git", "dist", "build", "__pycache__", ".next", ".cache", ".vscode"
}
EXCLUDE_FILES = {
    ".env", ".env.local", ".env.production", ".DS_Store"
}

OUTPUT_FILE = "project_dump.txt"

def should_exclude_dir(dirname: str) -> bool:
    return dirname in EXCLUDE_DIRS

def should_exclude_file(filename: str) -> bool:
    return filename in EXCLUDE_FILES

def dump_project(root_dir: str, output_file: str):
    with open(output_file, "w", encoding="utf-8", errors="ignore") as out:
        for root, dirs, files in os.walk(root_dir):
            # Modify dirs in-place to skip excluded directories
            dirs[:] = [d for d in dirs if not should_exclude_dir(d)]

            for fname in files:
                if should_exclude_file(fname):
                    continue

                file_path = os.path.join(root, fname)
                rel_path = os.path.relpath(file_path, root_dir)

                out.write("\n" + "=" * 80 + "\n")
                out.write(f"FILE: {rel_path}\n")
                out.write("=" * 80 + "\n\n")

                try:
                    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                        content = f.read()
                        out.write(content)
                        out.write("\n")
                except Exception as e:
                    out.write(f"[Could not read file: {e}]\n")

    print(f"Project dumped to {output_file}")

if __name__ == "__main__":
    # Change this to your project root directory
    PROJECT_ROOT = "."
    dump_project(PROJECT_ROOT, OUTPUT_FILE)
