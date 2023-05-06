$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header_col > ul, .header__burger').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.span__burger').click(function (event) {
    $('.header_col ul').removeClass('active');
    $('body').removeClass('lock');
  });
 
    
});

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.accordion-menu'), false);
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // 2. Определить target элемент
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    const href = e.target.getAttribute('href');
    console.log(href);
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const marketing = document.querySelector('#marketing');

btnScrollTo.addEventListener('click', function (e) {
  const marketingCoords = marketing.getBoundingClientRect();

  marketing.scrollIntoView({ behavior: 'smooth' });
});