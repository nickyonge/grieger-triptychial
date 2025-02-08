# Photoshop project files
Adobe Photoshop project files, all created by Nick Yonge and exported directly from Photoshop, made available under this repository's license

- `equirectangular-twotone.psd`
  - Photoshop file used to quickly make images of the Earth using an Equirectangular map projection
  - 5400x2600px
  - Images are used for [Geocart 3](https://www.mapthematics.com/) as databases, to quickly apply colour variations to map projections.
  - Modify the colours on the Land Colour and Ocean Colour layers to make different appearances, as seen in the [jpg](../jpg) folder.
  - SVG embedded in the PSD is `Equirectangular projection world map without borders.svg` from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Equirectangular_projection_world_map_without_borders.svg)
    - Ebrahim, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons

> [!IMPORTANT]
> When exporting from .psd to .jpg for use in Geocart, directly exporting from Photoshop doesn't seem to work. Attempting to import into Geocart as a database results in an error,
> > C:\Users\username\filepath\filename.jpg could not be added. The file is not a recognized database or image format, or is inaccessible.
> 
> This seems to be an issue with Photoshop's compression; to bypass this, simply open the .jpg in Paint, and re-save it. It can then import into Geocart successfully.
> 
> Tested on Windows 11, Photoshop CC 26.3, and Geocart 3.3.6 win64
