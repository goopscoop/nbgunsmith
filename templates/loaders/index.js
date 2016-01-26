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
    {item: 'Purchase Handguns and Firearms', link: '#'},
    {item: 'AR Builder Sets', link: '#'},
    {item: 'Ballistic Advantage Barrels', link: '#'},
    {item: 'Firearm Troubleshooting & Maintenance', link: '#'},
  ],
  imagepath: 'images/headshot.jpg'
});

$().ready(function(){
  $('#nav-bar').html(navBar)

  //home
  $('#services-index').html(services)
});