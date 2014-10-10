Grunt-Mail-Task-and-Framework
=============================

_A Grunt Mail Task and Mail Framework_

## Setup

_Just download it and run grunt watch from the command line_ 

## Description
This is not just a Grunt Task, it is also a powerfull Mail Framework. 

### What the Grunt-Task does:
- Compiles your SASS-Files to CSS
- Removes unused CSS from your stylesheets
- Inlines your CSS-styles

### What the Mail-Framwork is about
- 12-column SASS-Grid
- Powerfull SASS-functions
- Stable and tested HTML-Template

## How to use

**Grid:**<br>
12 Columns Grid:<br>
each row needs to have 12 columns in total, e.g. 2 + 10 or 6 + 6 <br>
Class for colums: .col-12-span / .col-2-span usw.<br>
If you need other widths, create your own in style.scss, e.g. .col-special-l-span {width: 52.586206897%;} + .col-special-2-span {width: 47.413793103%;} -> equals 100%<br>
.m12c -> use this class if you want to collapse a columns on grid-m<br>

**Padding:**<br>
Example: pad-left-5, pad-right-30, pad-md-right-60 usw.<br>
-> use -md for medium breakpoint<br>
->use -sm for small breakpoint<br>
Values: 0, 5, 10, 15, 20, 30, … 100<br>
For more, see _padding.scss<br>

**Font-Thems:**<br>
Generate your own font-styles in settings.scss<br>
Available Attributes: font-size, font-size-md, font-size-sm, font-color, font-weight, line-height, line-height-md, line-height-sm and letter-spacing<br>
-> expand -md / -sm in font-size and line-height for grid-m and grid-s, e.g. font-size-md: 14px<br>

**Colors:**<br>
Define your colors _settings.scss and use them:<br>
in scss as: color(yourcolor),<br>
ass class: <br>
.color-yourcolor <br>
.bg-color-yourcolor<br>

**Buttons:**<br>
You can change the following properties in _settings.scss:<br>
$btn-color: color(brown-bg);<br>
$btn-border-radius: 15px;<br>
$btn-padding-h: 10px;<br>
$btn-padding-v: 5px;<br>
-> change the alignement in the table align-Attribute<br>

**Change alignment:**<br>
Use this classes to change the alignement on certain breakpoints.<br>
Class examples: .align-md-left / .valign-sm-middle / .align-sm-center / .valign-md-bottom<br>

**Other Classes:**<br>
.inline-block -> display: inline-block;<br>
.row-padding -> basic vertical padding for rows -> set value in variable $h-space in _settings.scss<br>
img.auto-width -> use this for images which shouldn’t stretch to 100% on grid-m and grid-s<br>
.border-radius -> basic class for border-radius with vendor-prefixes -> set the value in _settings.scss -> $border-raduis<br>
.underline -> text-decoration: underline<br>
.hide-s -> hidden on grid-s<br>

**Default Classes:**<br>
<<<<<<< HEAD
.row -> used to set the width of the Mail-Template<br>
=======
.body -> removes padding and margin and set width to 100% (in Case Body-Element is deleted)
.row-padding -> optional -> puts some space between your rows<br>
.row -> used to set the width of the Mail-Template<br>
.col-... -> see Grid<br>
>>>>>>> dev


## License
MIT
