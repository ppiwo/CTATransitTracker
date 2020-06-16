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
    //opening sidenav if menu icon in nav bar is clicked
    $(".brand-logo").click(function() {
      $('.sidenav').sidenav('open');
  });
    /*Controlling input from setting levers*/
    $("#redLineToggle").click(function() {
      addRemoveTrainLines('red');
    });
    $("#blueLineToggle").click(function() {
      addRemoveTrainLines('blue');
    });
    $("#greenLineToggle").click(function() {
      addRemoveTrainLines('green');
    });
    $("#purpleLineToggle").click(function() {
      addRemoveTrainLines('purple');
    });
    $("#pinkLineToggle").click(function() {
      addRemoveTrainLines('pink');
    });
    $("#yellowLineToggle").click(function() {
      addRemoveTrainLines('yellow');
    });
    $("#orangeLineToggle").click(function() {
      addRemoveTrainLines('orange');
    });
    $("#brownLineToggle").click(function() {
      addRemoveTrainLines('brown');
    });
  });





