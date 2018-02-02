/*$(document).ready(function() {
  //screen splash
  setTimeout(function() {
    $(".preload").fadeOut(1500);
  }, 3000);

  setTimeout(function() {
    $("#main").removeClass("d-none")
  }, 2000);
});*/

$(document).ready(function() {
  // Difuminado lento (3.5 segundos en desaparecer)
  $().ready(function() {
    $("#splash").fadeOut(2000);
  });
  // Tiempo para cambiar localización 3s
  setTimeout(function() {
    // Direccionamiento a view: "home"
    $("#login");
  }, 2000);
});
