# Design System — Comic Collection Manager

## 1. Brand Principles

The Comic Collection Manager should feel clean, organized, and easy to use. The design should keep the focus on the comic collection by making information easy to scan and keeping navigation simple and consistent. Visual elements should support the collection without distracting from comic covers and information.

## 2. Color Palette

| Name | Hex | Use |
|------|-----|-----|
| Primary | #0D6EFD | Main Bootstrap brand color, primary buttons, and active elements |
| Secondary | #6C757D | Secondary buttons, supporting controls, and muted elements |
| Background | #FFFFFF | Main page and content background |
| Text | #212529 | Primary body text and headings |
| Light Background | #F8F9FA | Navigation, cards, and secondary page areas |
| Danger | #DC3545 | Error messages and data-loading errors |

## 3. Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| Heading 1 | System/Bootstrap sans-serif | 32px | 600 |
| Heading 2 | System/Bootstrap sans-serif | 24px | 600 |
| Body | System/Bootstrap sans-serif | 16px | 400 |

Typography should remain consistent with the Bootstrap-based starter application. Headings should clearly identify pages and sections while body text should remain readable and easy to scan.

## 4. Logo Usage

- File(s): No custom logo is required for the initial prototype.
- The application name, "Comic Collection Manager," will serve as the primary brand identifier in the navigation and page headings.
- Do NOT replace the application name with unclear icons or decorative graphics.
- Any future logo should maintain its original proportions and should not be stretched, distorted, or placed where it reduces readability.

## 5. Spacing & Grid

- Base unit: 8px
- Grid/columns: Bootstrap responsive grid system
- Standard spacing scale: 8 / 16 / 24 / 32 / 48px
- Content should use consistent Bootstrap containers, rows, and columns.
- Comic cards should maintain consistent spacing between items.
- Layouts should remain responsive so collection information can be viewed on different screen sizes.

## 6. Core Components

| Component | Rules |
|-----------|-------|
| Button (primary) | Bootstrap primary styling; used for primary actions and navigation to important content |
| Button (secondary) | Bootstrap secondary or outline styling; used for supporting actions |
| Card | Used for individual comics; consistently displays comic image, title, issue number, publisher, and available summary information |
| Form field | Bootstrap form styling with a visible label or clear purpose; used for search and filtering controls |
| Navigation | Consistent navigation between Home, Collection, and About pages |
| Search control | Clearly visible on the Collection page and allows users to search for individual comics |
| Filter control | Allows collection data to be filtered using available comic information such as title, publisher, character, issue number, or year |
| Error message | Clearly informs the user when collection data cannot be loaded instead of displaying an empty or broken page |
| Comic detail view | Displays additional information for a selected comic using the same visual conventions as the collection cards |

## 7. Voice & Tone

- Tone: clear, direct, and helpful.
- Interface text should use short and understandable labels.
- Avoid unnecessary technical language or overly long instructions.
- Navigation and controls should use familiar terms such as "Home," "Collection," "About," and "Search."
- Error messages should explain what happened in plain language and should help the user understand that the collection could not be loaded.
- The interface should remain focused on managing and browsing comics rather than using unnecessary decorative or humorous text.

## 8. Accessibility Standards

- Minimum contrast ratio: 4.5:1 for normal body text.
- Standard to meet: WCAG 2.1 AA.
- Interactive controls should be usable with a keyboard.
- Images should include appropriate alternative text.
- Form controls should have clear labels.
- Information should not rely on color alone to communicate meaning.
- Navigation and page structure should remain consistent.
- Text should remain readable when the interface is resized or viewed on smaller screens.

## 9. Version & Change Log

| Version | Date | Change | Approved by |
|---------|------|--------|-------------|
| 1.0 | 2026-10-04 | Initial design system for Comic Collection Manager | William Byers |

---

**Referenced by:** specification.md Section 6 (Constraints — Branding), Design step of each project.
