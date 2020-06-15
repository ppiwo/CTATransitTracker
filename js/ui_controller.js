/*
*Description: This js file uses jquery to control UI elements.
*Author: Patrick Piwowarczyk
*/

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init();
  });


  $(document).ready(function(){
    $('.sidenav').sidenav();

    //Closing sidenav if user clicks close icon
    $("#closeSettings").click(function() {
        $('.sidenav').sidenav('close');
    });
    $(".brand-logo").click(function() {
      console.log('hi');
      $('.sidenav').sidenav('open');
  });
  });

  /*Controlling input from setting sliders*/



