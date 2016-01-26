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

var navBar = Handlebars.getTemplate('navbar')({
  links: [
    {
      name: 'HOME',
      url: '/',
      class: 'active'
    },
    {
      name: 'SERVICES',
      url: './pages/services.html',
      class: ''
    },
    {
      name: 'INQUIRE',
      url: '#sumome-contactform-bp',
      class: ''
    }
  ]
});

var services = Handlebars.getTemplate('servicelist')({
  title: {
    bold: 'Gun Smithing',
    small: 'services'
  },
  items: [
    {item: 'Purchase Handguns and Firearms', link: 'pages/services.html'},
    {item: 'AR Builder Sets', link: 'pages/services.html'},
    {item: 'Ballistic Advantage Barrels', link: 'pages/services.html'},
    {item: 'Firearm Troubleshooting & Maintenance', link: 'pages/services.html'},
  ],
  imagepath: 'images/headshot.jpg'
});

$().ready(function(){
  $('#nav-bar').html(navBar)

  //home
  $('#services-index').html(services)
});