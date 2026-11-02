# HOPE Lab design previews

This package adds three complete visual alternatives under `design-previews/` without replacing the current website at the repository root.

## Upload
1. Extract this ZIP.
2. Open the `hope-lab-cu/website` repository.
3. Add file → Upload files.
4. Upload the contents of the extracted `hope-lab-design-options` folder into a new `design-previews/` folder. GitHub's upload interface may not preserve an outer folder automatically; keep the `01-academic-editorial`, `02-midnight-science`, and `03-modern-institute` folders together with `index.html` and `gallery.css`.
5. Commit the upload.

## Preview URLs
- `https://hope-lab-cu.github.io/website/design-previews/`
- `https://hope-lab-cu.github.io/website/design-previews/01-academic-editorial/`
- `https://hope-lab-cu.github.io/website/design-previews/02-midnight-science/`
- `https://hope-lab-cu.github.io/website/design-previews/03-modern-institute/`

Each concept contains five pages and its own stylesheet and logo asset. It uses relative paths so it works inside the repository subdirectory. The current root homepage is not overwritten.

## After selecting a design
We will migrate the selected design into the repository root, then add a Pages CMS configuration and move editable copy/publication/team content into structured JSON files. Pages CMS edits repository content; it does not itself redesign or render HTML. The site's front end must be prepared to read the editable content files.

The supplied Word document remains the content source. Some decorative panels are CSS illustrations/placeholders because the complete set of original homepage photographs has not yet been supplied.
