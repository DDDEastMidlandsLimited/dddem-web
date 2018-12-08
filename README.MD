<p align="center">
  <img src="https://s3.eu-west-2.amazonaws.com/ddd-images/ddd_avatar_400x400.jpg" />
</p>
<br/>

# DDD East Midlands

## Contents

[Setup](#setup)

[Branding Guide](#branding-guide)

[Contribution Guidelines](./.github/contributing.md)

[Code of Conduct](CODE_OF_CONDUCT.md)

## Setup

Install it:

`npm install`

### Running the site

To run a local version of the site with hot reload run:

`npm run dev`

To run a local copy of the site _without_ hot reloading, mimicking a live
environment run:

`npm run start`


### Exporting the site

Run the following 2 commands

`npm run build`
`npm run export`

This will build all assets and pages followed by exporting all to the
`out` folder.

This can then be uploaded into any static site hosting.

If you want to test the exported site you can install the `serve` module

`npm install -g serve`

The `cd out` and run

`serve -p 8080`

# Branding Guide

When making aesthetic changes to the site, please try to keep to our branding.

<img src="https://s3.eu-west-2.amazonaws.com/ddd-images/ddd_branding-08.jpg">

This follows the following theme palette:

```
theme.palette = {
    primary: '#1A7D87',
    secondary: '#C01439',
    tertiary: '#1A1E1E',
    quaternary: '#B5C6C4',
    light: '#FFFFFF',
    dark: '#000000',
}
```