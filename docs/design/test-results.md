# Test results

The app was tested locally in Microsoft Edge. GitHub Pages still needs a check after the files are committed.

| Tasks | Check | Result |
| --- | --- | --- |
| T1, T3 | Load 10 comics with unique IDs and all eight comic fields | Passed |
| T2 | Navigate between Home, Collection, and About | Passed |
| T4, T5, T12 | Open a card and check the comic details; refresh the detail page | Passed |
| T6, T7 | Search for Solar Sentinel #2 with mixed case and surrounding spaces | Passed |
| T8, T9 | Filter title, publisher, character, issue number, and year separately | Passed |
| T8, T9 | Combine Orbit House and 2024 to find Star Courier #2 | Passed |
| T6–T9 | Show no matches and clear search and filters | Passed |
| T10 | Missing CSV, missing columns, duplicate IDs, and malformed CSV show errors | Passed |
| T10 | A valid header with no records shows an empty collection message | Passed |
| T11 | Blank and broken image URLs show a cover placeholder | Passed |
| T13 | Collection and details fit widths of 375, 768, and 1440 pixels | Passed |
| T14 | Home → collection → search → comic details → collection | Passed |

No JavaScript page errors occurred during these checks. An unknown comic ID shows a not-found message. Collection screenshots were checked at phone and desktop sizes.

## Review

William's review is pending. After upload, repeat the main flow on GitHub Pages and check keyboard navigation. Mark tasks Done only after review.

## Data

The ten comics are fictional sample records. Cover URLs are blank; no image uploads are required. The CSV retains the original six columns and adds the five missing comic columns. The loader reads the eight comic fields from the specification.
