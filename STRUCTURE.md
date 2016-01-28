# File structure

Separate sections for files designed for different purposes:

* Home/index page with listings (styles, scripts, images, data)
* Includes for library documentation sites (styles, scripts, images)

Current structure:

- `shared` — All common files designed to be used by other gh-pages sites
  - `docs`
    - `theme-v1` — Terminal-style theme
      - `forkme-terminal.png`
    - `theme-v2` — Teal theme; Raleway font
      - `docs-common.css`
      - `docs-common.js`
- `gilhub` — All files for the top-level site
  - `lib` — Compiled files for inclusion in HTML files
    - `home.css`
  - `src` — Source files for compilation
    - `home.src.css`

