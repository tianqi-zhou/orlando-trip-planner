# Orlando Trip Planner · September 2026

Personal Orlando itinerary for September 9–13, 2026. Chinese-language planning pages cover Epic Universe, Universal Studios Florida, Islands of Adventure, and Walt Disney World.

## Open the project

Live site: https://tianqi-zhou.github.io/orlando-trip-planner/

GitHub Pages serves the `gh-pages` branch, containing the contents of `outputs/`. Changes on `main` must be copied to that publishing branch to update the live site.

Open `outputs/orlando-park-guide.html` in a browser. No build or installation is required. Keep the `outputs/assets` folder alongside the HTML files.

- **Trip planner:** `outputs/orlando-park-guide.html` — attractions, priorities, editable day/time assignments, calendar, dining, weather, tickets, park hours, and sources.
- **Official-map route viewer:** `outputs/orlando-3d-walk.html` — switch days and parks; zoom, pan, play, and follow reference routes over official map artwork. Despite its historical filename, the current page uses two-dimensional official map images, not 3D models.

The second day includes user-provided screenshots of the Universal official interactive map, showing USF, IOA, the Hogwarts Express connection, and CityWalk.

## Saved selections

The planner saves choices in browser `localStorage` under `orlando-project-planner-v1`. These choices are not part of Git and do not automatically move to another browser, device, or hosted URL. Default recommendations are included in the HTML. The map routes are separate reference routes and do not automatically recalculate from planner selections.

## Source files

- `outputs/assets/official-maps/`: map images used by the viewer.
- `work/official-maps/`: successfully downloaded official source PDFs.
- `work/test-guide.js`: lightweight planner rendering check (`node work/test-guide.js`).
- `work/orlando-3d-walk-schematic-backup.html`: archived earlier schematic version, retained for history; not the current viewer.
- `outputs/assets/three.min.js`: component retained for that archived version.

Official artwork and screenshots retain the rights of Disney, Universal, and their respective rights holders. This repository is for private personal trip planning, not redistribution under an open-source artwork license. Source links and map editions are recorded in the pages.

## Planning limitations

Hours, closures, pass eligibility, prices, weather, and menu availability can change. The pages are planning notes and should be checked against the official apps before travel. Routes are approximate and are not turn-by-turn navigation. Original map cluster counts and added route numbers have different meanings.
