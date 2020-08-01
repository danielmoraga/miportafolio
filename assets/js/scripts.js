$(function(){
  $("a").click(function(event) {

  if (this.hash !== "") {
  event.preventDefault();

  var gato = this.hash;

  $('html, body').animate({
  scrollTop: $(gato).offset().top}, 800, function(){

  window.location.hash = gato;
  });
  } // Fin del if
  });
  });  
  
  
  
  //ventanas modales
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

    //tooltip
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })