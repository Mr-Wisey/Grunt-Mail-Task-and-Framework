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
– Stable and tested HTML-Template

## How to use

**Grid:**
12 Columns Grid: 
each row needs to have 12 columns in total, e.g. 2 + 10 or 6 + 6 
Class for colums: .col-12-span / .col-2-span usw.
If you need other widths, create your own in style.scss, e.g. .col-special-l-span {width: 52.586206897%;} + .col-special-2-span {width: 47.413793103%;} -> equals 100%
.m12c -> use this class if you want to collapse a columns on grid-m

**Padding:**
Example: pad-left-5, pad-right-30, pad-md-right-60 usw.
-> use -md for medium breakpoint
->use -sm for small breakpoint
Values: 0, 5, 10, 15, 20, 30, … 100
For more, see _padding.scss

**Font-Thems:**
Generate your own font-styles in settings.scss
Available Attributes: font-size, font-size-md, font-size-sm, font-color, font-weight, line-height, line-height-md, line-height-sm and letter-spacing
-> expand -md / -sm in font-size and line-height for grid-m and grid-s, e.g. font-size-md: 14px

**Colors:**
Define your colors _settings.scss and use them:
in scss as: color(yourcolor),
ass class: 
.color-yourcolor 
.bg-color-yourcolor

**Buttons:**
Use the HTML-Setup in Documentation. 
You can change the following properties in _settings.scss:
$btn-color: color(brown-bg);
$btn-border-radius: 15px;
$btn-padding-h: 10px;
$btn-padding-v: 5px;
-> change the alignement in the table align-Attribute

**Change alignment:**
Use this classes to change the alignement on certain breakpoints.
Class examples: .align-md-left / .valign-sm-middle / .align-sm-center / .valign-md-bottom

**Other Classes:**
.inline-block -> display: inline-block;
.row-padding -> basic vertical padding for rows -> set value in variable $h-space in _settings.scss
img.auto-width -> use this for images which shouldn’t stretch to 100% on grid-m and grid-s
.border-radius -> basic class for border-radius with vendor-prefixes -> set the value in _settings.scss -> $border-raduis
.underline -> text-decoration: underline
.hide-s -> hidden on grid-s

**Default Classes:**
.row -> used to set the width of the Mail-Template


## License
MIT
