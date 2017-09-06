# ATWT: A Look at Anime JS

Anime JS is a library to help you animate html elements without the use of CSS. It speeds up the development of adding animated elements to your webpage.

## Capabilities

This framework has several features:
  - Supports animating svgs
  - Animates dom elements by changing colors, position and transformations
  - Can chain multiple animations on a single dom element
  - Can control timing and looping
  - etc..

## What has been done for this meetup

- A sample infographic look (it isnt really pretty, but you get the idea!)
- A sample animated banner. (same.... not pretty, but it does the job)

A few things to note: 
- There is no jquery..... YEEEEESSS!!! 
- I use a couple of scripts to help me build this application:
``` 
"build-js": "watchify js/animation.js -o dist/animation-compiled.js -t [ babelify --presets [ es2015 ] ]",
"build-css": "gulp sass:watch" 
```
- Images used I found in google images, including the svg.
- Font awesome is used.

In order to get this running, just do:
```
$ npm install
```
and open the index.html file in a browser and it's good to go. 
