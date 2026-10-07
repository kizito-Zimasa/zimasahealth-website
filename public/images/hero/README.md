# Hero Images — Designer Drop-in Directory

This directory holds full-bleed hero background photos. The code already wires each page to its expected filename with a CSS overlay. When you drop a file in here, the page immediately renders with the photo.

## Expected files

| Filename           | Page                 | Dimensions  | Format |
|--------------------|----------------------|-------------|--------|
| `home-hero.jpg`    | Home (/)             | 1920×1080   | JPG    |
| `payers-hero.jpg`  | Insurers & TPAs      | 1920×1080   | JPG    |
| `employers-hero.jpg` | Employers          | 1920×1080   | JPG    |
| `providers-hero.jpg` | Healthcare Providers | 1920×1080 | JPG    |
| `members-hero.jpg` | Zimasa Go            | 1920×1080   | JPG    |
| `about-hero.png`   | About (founder photo)| 1920×1080   | PNG ✅ |

## Notes

- `about-hero.png` is already present — it is the founder photo (Kizito Makatiani).
- All other photos are stock photography (brief §2). Source from Shutterstock, Unsplash Pro, or Adobe Stock. See `Docs/Final/09_Imagery-Spec.md` for tone and subject guidance.
- Optimum file size: ≤300 KB after compression (use Squoosh or ImageOptim).
- Overlays: green pages get `rgba(10, 110, 56, 0.65)`, navy pages get `rgba(13, 33, 51, 0.70)`. No Photoshop compositing needed.
