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
      class: ''
    },
    {
      name: 'SERVICES',
      url: './pages/services.html',
      class: 'active'
    },
    {
      name: 'INQUIRE',
      url: '#sumome-contactform-bp',
      class: ''
    }
  ]
});

var featuredServices = Handlebars.getTemplate('featuredlist')({
  title: {
    bold: 'Gun Smithing',
    small: 'services'
  },
  items: [
    {
      heading: 'Handguns & Fire Arms – New & Used',
      description: 'Handguns, Shotguns and AR’s such as: AR15, M4, M5, High End 1911’s, Glock, Sig Sauer, H & K, Springfield, Smith & Wesson, Ruger, Winchester, and much more!',
      cta: 'Contact us for details!',
      img: '../images/Ruger-SR1911.jpg',
      link: '#sumome-contactform-bp'
    },
    {
      heading: 'AR Builder Sets',
      description: 'Matched Upper & Lower Sets, Individual Uppers & Lowers, Bolt carrier groups, Lower parts kits, Hand Guards, Triggers, Furniture',
      cta: 'Contact us for details!',
      img: '../images/ar15builderkit.jpg',
      link: '#sumome-contactform-bp'
    },
    {
      heading: 'Gun Smithing',
      description: 'Law enforcement certified armorer certified in: Cleaning, Tuning, Inspection & Repair – Handguns & AR’s, Bore Sighting & Optic Mounting, Sight Installation, Repair & Re-build, Trigger Work & Tuning, Test & Tune All Types of Firearms assuring they function as expected.',
      cta: 'Contact us form details!',
      img: '../images/gunsmithing.jpg',
      link: '#sumome-contactform-bp'
    }
  ]
})


$().ready(function(){
  $('#nav-bar').html(navBar)
  $('#featured-services').html(featuredServices)
});