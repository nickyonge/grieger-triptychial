# Grieger Triptychial Map Assets
Resources related to the Grieger Triptychial map projection, and its display and projection

![Image of the Grieger Triptychial Projection, white coastlines with gray latitude/longitude lines, on a black background.](jpg/grieger_triptychial-latlong_land-black_with_border.jpg?raw=true)

## About this repository and project
This repository is primarily for the distribution of assets related to the Grieger Triptychial map projection as redrawn and edited by Nick Yonge, for his hand-drawn map project.

Software used in this project:
- [Amadine for iPad](https://amadine.com/) (paid or subscription, also available on Mac)
- [Procreate for iPad](https://procreate.com/) (paid)
- [GeoCart 3](https://www.mapthematics.com/) for Windows (paid, trial version used)
- [QGIS 3.34](https://qgis.org/) for Windows (free, open source, also available on Mac, Linux, and others)
- [iCloud Drive](https://www.icloud.com/iclouddrive/) (free/subscription) to transfer files between tablet and computer
- [Fork](https://git-fork.com/) for Windows (paid with trial available, also available on Mac) as a standalone Git client (great for projects with little-to-no code in them)

Creative tools used in this project:
- Canvases treated with gesso (white or black), 2:1 aspect ratio sized (typically 10x20", 12x24", 20x40", and 24x48", with about ~3" added per side to accommodate framing)
- Acrylic paint to create base colour layers as needed
- Permanent marker, or acrylic/oil paint pens (typically water-based but sometimes alcohol-based), to illustrate coastlines and lat/long lines
- Wall-mounted projector (a used Bomaker GC355 that I got cheap, but _oh my god_ I'd love something better) to project digital image of the map lines onto prepared canvas

## About the projection and its creator 
The [Grieger Triptychial Projection](http://bgrieger.bplaced.net/bgrieger008.html) was created by [Dr. Björn Grieger](http://bgrieger.bplaced.net/) in 2008 and published in 2019.

It is derived from [Adams hemisphere-in-a-square projection](https://en.wikipedia.org/wiki/Adams_hemisphere-in-a-square_projection) (1925), which itself is a transversion of the [Peirce quincuncial projection](https://en.wikipedia.org/wiki/Peirce_quincuncial_projection) (1879). It is created by taking two instances of Adams' hemisphere-in-a-square, centered at coordinates 45°N 0°E and 45°S 180° E, respectively. Both projections are rotated 45°, the northernward projection clockwise and the southernward projection counterclockwise. They are aligned, and the southernward projection is bisected vertically, with the far half moved to the opposite side of the northernward projection. These three segments then create the titular [triptych](https://en.wikipedia.org/wiki/Triptych) and complete Grieger's Triptychial Projection. More details on this creation process, and doing it yourself via GeoCart, are found in Tobias Jung's [related post](https://blog.map-projections.net/lee-markley-calm-and-grieger) on the Map-Projections.net blog. 

- Grieger, B. (2019).“Quincuncial adaptive closed Kohonen (QuACK) map for the irregularly shaped comet 67P/Churyumov-Gerasimenko”. A&A ‍630, A1. https://doi.org/10.1051/0004-6361/201834841
- Grieger, B. (2020). “Optimized global map projections for specific applications: the triptychial projection and the Spilhaus projection”. EGU2020-9885. https://doi.org/10.5194/egusphere-egu2020-9885

## Additional links

- [Map-Projections.net](https://map-projections.net/single-view/grieger-triptychial) reference post on the Grieger Triptychial projection (where I first came across it! This is a fun website to [browse](https://map-projections.net/recommended-list.php))
- [Map-Projections.net](https://blog.map-projections.net/lee-markley-calm-and-grieger) blog post by site creator Tobias Jung on the background of the projection, GeoCart recreation, related projections, and its inclusion on the site
- [PROJ documentation](https://proj.org/en/stable/operations/projections/peirce_q.html) details on the Peirce Quincuncial projection, and using it to recreate the Grieger Triptychial projection
- [Harvard.edu database](https://ui.adsabs.harvard.edu/abs/2020EGUGA..22.9885G/abstract) link to Dr. Grieger's 2020 optimized projections triptychial/Spilhaus projection paper
