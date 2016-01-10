Website for North Bend gun smith Steve Barrus.

# Development

This is a static, front end only site using Handlebars templates and jQuery.

To run, simply open index.html on the root directory.

## Working with Templates

Handlebars templates live in `/templates` with scripts to load these templates living in `/templates/loaders`. Scripts are named after the route they are loading (ie. `index.js`, `about.js`, etc. No other functionality should live in these files other than loading the templates, all other functionality should live in the `/js/` directory. The complied templates are stored as `/templates/templates.js`

When developing a template, to test changes run `npm run compile` and refresh page. Need to come up with a more efficient way of doing this. Possibly a `npm compile:watch` script.

Before merging into master, make sure to run `npm run compile`.

## JavaScript

All behavioral JavaScript files live in the `/js/` directory. Scripts in the root of this directory were pre-built scripts from a purchased theme. Honestly, lot's of those files are unnecessary and seem to be poorly orginized. A future task may include further pruning of many of these files, but for now that's not a priority.

Custom scripts, if needed, will live in subdirectory `/js/src/` with files corrisponding to the route they are adding behavior to (ie `index.js`, or `about.js`, etc).

## HTML

Only the `index.html` file lives in the root of the project. All other HTML files will live in `/pages/` in order to keep the root tidy.
