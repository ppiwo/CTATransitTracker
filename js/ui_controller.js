/*
 *Description: This js file uses jquery to control UI elements.
 *Author: Patrick Piwowarczyk
 */

document.addEventListener("DOMContentLoaded", () => {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init();
});

$(document).ready(() => {
  $(".sidenav").sidenav();

  //Closing sidenav if user clicks close icon
  $("#closeSettings").click(() => {
    $(".sidenav").sidenav("close");
  });
  //opening sidenav if menu icon in nav bar is clicked
  $(".brand-logo").click(() => {
    $(".sidenav").sidenav("open");
  });
  /*Controlling input from setting levers*/
  $("#redLineToggle").click(() => {
    addRemoveTrainLines("red");
  });
  $("#blueLineToggle").click(() => {
    addRemoveTrainLines("blue");
  });
  $("#greenLineToggle").click(() => {
    addRemoveTrainLines("green");
  });
  $("#purpleLineToggle").click(() => {
    addRemoveTrainLines("purple");
  });
  $("#pinkLineToggle").click(() => {
    addRemoveTrainLines("pink");
  });
  $("#yellowLineToggle").click(() => {
    addRemoveTrainLines("yellow");
  });
  $("#orangeLineToggle").click(() => {
    addRemoveTrainLines("orange");
  });
  $("#brownLineToggle").click(() => {
    addRemoveTrainLines("brown");
  });
  $("#brownLineToggle").click(() => {
    addRemoveTrainLines("brown");
  });
});
