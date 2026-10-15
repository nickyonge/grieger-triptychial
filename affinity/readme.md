# Affinity project files
Affinity project files, all created by Nick Yonge, made available under this repository's license

All `.af` files are exported exclusively from Affinity Studio

Any `.afdesign` files can be exported from either Affinity Studio or Affinity Designer 2, but here are almost certainly from Affinity Designer 2

The [resources](/resources/) subfolder contains some assets linked to project files.

## Files 

### `GriegerTriptychial_Full.af`
The main Affinity project file, with all other files [linked](https://www.affinity.studio/help/media-embedding-vs-linking/) within. Specifically, 
- `GriegerTriptychial_Coastlines.af`, which has all the coastline vectors, 
- `GriegerTriptychial_LatLong.af`, which has all the GCS graticules, and
- `GriegerTriptychial_Text.af`, which itself links to `GriegerTriptychial_Text_PathText.af` and `GriegerTriptychial_Text_Vectorized.af`, which contains all the text.

### `GriegerTriptychial_Coastlines.af`
Contains all the coastline vectors. These are separated into quality levels, edited in Affinity from the initial imported max quality version (the initial manually traced).

There are seven quality levels. Within each quality level, they are further separated into subgroups based on the relative size of the shapes within: Continents; Major Details; Minor Details; and Tiny Details. [More details here](https://docs.google.com/spreadsheets/d/1C3DVdrIfphAbt0l_O2yzxhqfRSXXaVyEBERSfjhelSc/edit?usp=sharing).

### `GriegerTriptychial_LatLong.af`
The lines that make up the [GCS](https://en.wikipedia.org/wiki/Geographic_coordinate_system) [graticule](https://en.wikipedia.org/wiki/Graticule). Separated into latitude, longitude, and additionally the Tropics of Cancer and Capricorn, and the Arctic and Antarctic polar circles.

### `GriegerTriptychial_Text.af`
The text files that make up the labels of the map, generated in seven different fonts, in three approximate font sizes each: 12pt; 20pt; and 30pt. Each font's group is split into five overall layers: Latitude; Longitude; Tropics; Polar Circles; and Poles. They've been manually across all sizes adjusted to minimize overlap and prioritize readability from any orientation.

The fonts used are:
1. [Arial](https://en.wikipedia.org/wiki/Arial)
2. [Georgia](https://en.wikipedia.org/wiki/Georgia_(typeface))
3. [Inclusive Sans](https://fontsource.org/fonts/inclusive-sans), by [Olivia King](https://www.oliviaking.com/inclusivesans/feature)
4. [SLF Engineer](https://www.singlelinefonts.com/products/single-line-font-engineer), by [Single Line Fonts](https://www.singlelinefonts.com/)
5. [SLF Architect](https://www.singlelinefonts.com/products/single-line-font-architect-ttf-version)
6. [SLF Afternoon Delight](https://www.singlelinefonts.com/products/slf-afternoon-delight)
7. [SLF Bubble Wrap](https://www.singlelinefonts.com/products/single-line-font-bubble-wrap)

#### Inclusive Sans
The Inclusive Sans typeface isn't pre-installed on your machine, but is freely available on [Fontsource](https://fontsource.org/fonts/inclusive-sans), [Google Fonts](https://fonts.google.com/specimen/Inclusive+Sans), [Adobe Fonts](https://fonts.adobe.com/fonts/inclusive-sans), [GitHub](https://github.com/LivKing/Inclusive-Sans), and elsewhere. It's great. A clean, sans serif font explicitly designed to be accessible for everyone. This has become my go-to default font for many of my projects. I highly recommend reading the [writeup](https://www.oliviaking.com/inclusivesans/feature) that Olivia King, the font's creator, wrote.

#### SLF Fonts
Due to how fonts are designed, fonts are an outline vector that gets filled in. Eg, drawing a lower case L won't just draw a vertical line like **|** , but will draw a full outline like **▯**. This means, if you're trying to draw letters with tools like a pen plotter, small letters will essentially get drawn over twice and will appear unpleasantly dark and thick. The SLF (Single Line Fonts) fonts are designed for drawing with machining tools, eg a pen/laser/engraver, meaning they are *just* a single outline stroke with no fill. They may not render properly or at all on computer, but they work great for tooling.

The SLF fonts are commercially licensed fonts made by, and available from, [Single Line Fonts](https://www.singlelinefonts.com/). It's an incredible resource for fonts that are designed to be used with equipment like pen plotters, vinyl cutters, or CNC machines. **The font files themselves are not included in this project, and are not legally allowed to be shared.** If you haven't purchased a license for them and downloaded the fonts, the editable assets in the `PathText` file will not render. The vectorized ones will, but are not editable, as they're just converted to vector. If you can afford it and want to use them, I wholeheartedly recommend grabbing them from SLF!

I chose SLF Engineer for readability. I chose SLF Architect for professionalism. I chose SLF Afternoon Delight for pretentiousness. I chose SLF Bubble Wrap for playfulness. They're all wonderful.

#### Arial and Georgia
If you don't already have these guys on your machine, that's *wild*. Maybe make a fork of this repo so it's compatible with your homebrew Linux or piOS project?

#### `GriegerTriptychial_Text_PathText.af`

The editable font fields, created using Path Text to follow various curves (primarily latitude/longitude lines). 

If you don't have the necessary font assets installed on your machine, those font fields won't render. They'll likely default to "_sans" or something, and you'll get a warning message when you first open the file. You

See above for info re: font asset availability, but the Arial and Georgia fonts are almost certainly pre-installed on your machine, and Inclusive Sans is [freely available](https://www.oliviaking.com/inclusivesans/feature).

To modify the fonts used in Affinity, eg to replace the font with your own:
1. Duplicate one of the existing font groups, eg the "Arial" group layer inside "Map Text - Path Text"
2. Ensure all other groups are hidden, and that all three font sizes (the 30pt, 20pt, and 12pt group layers inside of the one you just duplicated) are visible
   - All the layers *inside* those subgroups should also be visible
4. In the menu *Layer > Select > Layer*, ensure *Select Hidden Objects* at the bottom is turned **off** (no visible checkmark)
5. Select *Layer > Select > Layer > Path Text* to select all the visible text fields for your newly-duplicated text
6. With the Artistic Text Tool selected (hotkey `T`), you can now change the typeface to whatever you want
7. Rename the group to your new typeface, because naming your groups and layers is good digital art hygeine, and we make sure to practice good hygeine in this house 

Note that within each font size group, the Continents and Poles text fields are individually size adjusted to be a bit larger

#### `GriegerTriptychial_Text_Vectorized.af`

The fonts rendered to vector. Non-editable, but ready to export or print.

Since this contains vectorized versions of *all* the text, it's quite a chonky asset, at just over 20mb.

#### `GriegerTriptychial_Text_Notes.af`
In both text files, there's also a Notes file linked. This file explains what all the layer tag colours are. Selecting them lets you turn groups of notes on and off at once.

### `GriegerTriptychial_PrintBorder.af`
The border that goes aroudn the outside of printed map illustrations. Just an extension of the lat/long lines. 100px wide, or 1/3rd of an inch at 300dpi.

## Obsolete Files
Files that I don't want to delete but aren't the most up-to-date 

### `grieger_triptychial-land_latlong_text.af`
First pass at a full GT projection file. Contains most assets, but obsolete. Use `GriegerTriptychial_Full.af` instead 
### `GriegerTriptychial_Silhouette_Export.af`
Initial setup for silhouette, before being replaced by specific asset exports in the [`../svg/gt full exports/](../svg/gt%20full%20exports/) folder 
### `griegertriptychial_embedded.af` 
Earlier version of the full version containing embedded, rather than linked, assets
### `gt_print_cutout.af`
Initial file used for creating the print border 
