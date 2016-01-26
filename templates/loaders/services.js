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

var featuredServices = Handlebars.getTemplate('featuredlist')({
  title: {
    bold: 'Gun Smithing',
    small: 'services'
  }
})

$().ready(function(){
  $('#nav-bar').html(navBar)

});