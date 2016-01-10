Website for North Bend gun smith Steve Barrus.

# Development

This is a static, front end only site using Handlebars templates and jQuery.

To run, start a simple server from the root directory. On my local machine `srv`.

## Working with Templates

Handlebars templates live in `/templates` with scripts to load these templates living in `/templates/loaders`. Scripts are named after the route they are loading (ie. `index.js`, `about.js`, etc. No other functionality should live in these files other than loading the templates, all other functionality should live in the `/js/` directory. The complied templates are stored as `/templates/templates.js`

When developing a template, to test changes run `npm run compile` and refresh page. Need to come up with a more efficient way of doing this. Possibly a `npm compile:watch` script.

Before merging into master, make sure to run `npm run compile`.

## JavaScript

All behavioral JavaScript files live in the `/js/` directory. Scripts in the root of this directory were pre-built scripts from a purchased theme. Honestly, lot's of those files are unnecessary and seem to be poorly orginized. A future task may include further pruning of many of these files, but for now that's not a priority.

Custom scripts, if needed, will live in subdirectory `/js/src/` with files corrisponding to the route they are adding behavior to (ie `index.js`, or `about.js`, etc).

## HTML

Only the `index.html` file lives in the root of the project. All other HTML files will live in `/pages/` in order to keep the root tidy.

## `/site/`

The `/site/` directory holds template HTML files provided by the theme purchased. These files are to remain unmodified so that they may be used as a reference. Eventually, the use of templates should render these files obsolete.

## New HTML files quick start

To start a new HTML file, first copy this template reomoving any unecessary scrpts.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="format-detection" content="telephone=no"/>
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <title>SERVICES</title>

    <!-- Bootstrap -->
    <link href="../css/bootstrap.css" rel="stylesheet">

    <!-- Links -->
    <link rel="stylesheet" href="../css/jquery.fancybox.css">

    <!--JS-->
    <script src="../js/jquery.js"></script>
    <script src="../js/jquery-migrate-1.2.1.min.js"></script>
    <script src="../js/handlebars.runtime-v4.0.5.js"></script>
    <script src="../templates/templates.js"></script>
    <!--  Template Loading Scripte goes HERE!!! <script src="../templates/loaders/services.js"></script>  -->


    <!--[if lt IE 9]>
    <div style=' clear: both; text-align:center; position: relative;'>
        <a href="http://windows.microsoft.com/en-US/internet-explorer/..">
            <img src="../images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820"
                 alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."/>
        </a>
    </div>
    <script src="js/html5shiv.js"></script>
    <![endif]-->
    <script src='../js/device.min.js'></script>
  </head>
  <body>
  <div class="page">
    <div id="nav-bar"></div>
    <main>

    <!--Content goes here via template loading-->
    
    </main>
  </div>
</body>
</html>
```

For the template file, copy in this snippet:

```javascript
Handlebars.getTemplate = function(name) {
  if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
    $.ajax({
      url : 'templates/' + name + '.handlebars',
      success : function(data) {
        if (Handlebars.templates === undefined) {
          Handlebars.templates = {};
        }
        Handlebars.templates[name] = Handlebars.compile(data);
      }
    });
  }
  return Handlebars.templates[name];
};

var compiledNav = Handlebars.getTemplate('navbar');
var navBar = compiledNav();
// instanciate templates here


$().ready(function(){
  $('#nav-bar').html(navBar)
  
  // attach to appropriate divs here
});

```
