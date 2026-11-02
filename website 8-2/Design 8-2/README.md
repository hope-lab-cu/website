# HOPE Lab — Eight Website Design Concepts

This folder contains eight complete visual concepts for the HOPE Lab website at the University of Chittagong. Each concept includes five navigable pages: Home, Research, Publications & Preprints, People, and Contact. The same supplied lab content is used throughout so you can compare the visual design rather than differences in wording.

## Design options

| Folder | Design | Theme | Direction |
|---|---|---|---|
| `design-01/` | Nocturne Editorial | Dark | Ink navy · warm brass · literary serif |
| `design-02/` | BioGrid / Swiss Lab | Dark | Black-green · signal lime · technical mono |
| `design-03/` | Violet Spectrum | Dark | Midnight violet · cyan · soft glass |
| `design-04/` | Graphite & Copper | Dark | Graphite · terracotta · high-contrast display |
| `design-05/` | Ivory Journal | Light | Warm ivory · forest green · refined serif |
| `design-06/` | Fieldnotes | Light | Pale sage · moss · organic forms |
| `design-07/` | Swiss Cobalt | Light | Pure white · cobalt · geometric sans |
| `design-08/` | Warm Studio | Light | Soft chalk · clay · modern humanist |

## Preview locally

Open `index.html` in a web browser. On the first page, choose any design card. Each design has a shared navigation menu to visit all five pages. An internet connection is required for Google Fonts and the remotely hosted photography used in the concepts.

## Add to your GitHub repository

1. Download and extract the ZIP archive.
2. Upload the entire `hope-lab-design-options` folder into the root of `hope-lab-cu/website` (do not replace your existing homepage).
3. Commit and push the new folder.
4. Open: `https://hope-lab-cu.github.io/website/hope-lab-design-options/`
5. Select a design and inspect all five pages.

The design concepts are nested in a subfolder, so they do not replace or overwrite your current root-level website. All local paths are relative, which is preferable when the site is served from a subdirectory such as a university URL path.

## Important notes

- These are design prototypes for selection, not a production launch.
- The eight designs share the content data in `shared/data.js`; editing that file updates content across all eight concepts.
- Styling is separate in each `design-XX/theme.css` file.
- Photographs are currently loaded from Unsplash URLs and Google Fonts from Google Fonts. If you select a design, we can replace those remote assets with locally stored files before final deployment.
- Publication links/DOIs were not supplied in the source material, so publication titles are displayed as text rather than linked to invented URLs.
- Please verify all names, affiliations, publication metadata, and current member statuses before selecting the final production version.
