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
    //Opening sidenav for dev, remove!!
    $('.sidenav').sidenav('open');

    //Closing sidenav if user clicks close icon
    $("#closeSettings").click(function() {
        $('.sidenav').sidenav('close');
    });
  });



