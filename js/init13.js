  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.slider');
  //   var instances = M.Slider.init(elems, options);
  // });


          

  $(document).ready(function(){
    $('.slider').slider({
    	indicators: false,
    	transition: 600,
    	interval: 4000,
    });
  });


  $(document).ready(function(){
    $('.modal').modal();
  });


$(document).ready(function () {
  $('.tap-target').tapTarget()
  
  $('input[type="checkbox"]').on('change', function() {
     $('.tap-target').tapTarget('open')
  })  
})


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll(".tap-target");
  M.TapTarget.init(elems);
});

function next(n) {

  var inst;

  // Get each of the elements
  var elems = document.querySelectorAll(".tap-target");

  var current = n;
  var prev = --n;

  // If a previous target is open, close it.
  if(prev >= 0) {
    inst = M.TapTarget.getInstance(elems[prev]);
    inst.close();
    inst.destroy();
  }

  // Then, open the new target
  inst = M.TapTarget.getInstance(elems[current]);
  inst.open();
}


  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
        


  // Or with jQuery

  $(document).ready(function(){
    $('.datepicker').datepicker({
      format: 'd-m-yyyy',
                 i18n: {
                cancel: 'Cancelar', 
                months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"],
                weekdays: ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                weekdaysShort: ["Dom","Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
                weekdaysAbbrev: ["D","L", "M", "M", "J", "V", "S"]
              }
    });
  });



$(function() {

    $( "[data-product-info-link]" ).click(function(e) {
        e.preventDefault();
        var theLink = $(this);
        var tabNum = $(this).data('product-info-link');
        var tabItem = '[data-product-info-tab="' + tabNum +'"]';
        var check = $(tabItem).is(':visible');

        if ( !check ) {
            var other = $('[data-product-info-link]').not(this).removeClass('active');
            var fadeOutDone = $('[data-product-info-tab]').fadeOut('fast').promise();

            fadeOutDone.then(function(){
                $(tabItem).fadeIn('fast');
                $(theLink).addClass('active');
            });
        }
    });

});


  // document.getElementById("menuu").addEventListener('click',function ()
  //   {

  // $(document).ready(function(){
  //   $('.sidenav').sidenav();
  // });

  //   });

