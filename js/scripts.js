$(document).ready(function(){
  $('form#inputPanel').submit(function(event){
    event.preventDefault();
    var userHeight = parseInt($('input#userInput').val());
    if (userHeight < 90) {
      $('#sorry').show();
      $('#dumbo').slideUp();
      $('#pan').slideUp();
      $('#teacup').slideUp();
      $('#splash').slideUp();
      $('#space').slideUp();
      $('#pirates').slideUp();
      $('#dwarf').slideUp();
      $('#rapids').slideUp();
      $('#mansion').slideUp();

    } else if (userHeight >= 90 && userHeight < 100){
      $('#dumbo').show();
      $('#pan').show();
      $('#teacup').slideUp();
      $('#splash').slideUp();
      $('#space').slideUp();
      $('#pirates').slideUp();
      $('#dwarf').slideUp();
      $('#rapids').slideUp();
      $('#mansion').slideUp();

    } else if (userHeight >=100 && userHeight < 120){
      $('#dumbo').show();
      $('#pan').show();
      $('#teacup').show();
      $('#splash').slideUp();
      $('#space').slideUp();
      $('#pirates').slideUp();
      $('#dwarf').slideUp();
      $('#rapids').slideUp();
      $('#mansion').slideUp();

    } else if (userHeight >=120 && userHeight < 130){
      $('#dumbo').show();
      $('#pan').show();
      $('#teacup').show();
      $('#splash').show();
      $('#space').show();
      $('#pirates').slideUp();
      $('#dwarf').slideUp();
      $('#rapids').slideUp();
      $('#mansion').slideUp();

    } else if (userHeight >=130 && userHeight <140) {
      $('#dumbo').show();
      $('#pan').show();
      $('#teacup').show();
      $('#splash').show();
      $('#space').show();
      $('#pirates').show();
      $('#dwarf').slideUp();
      $('#rapids').slideUp();
      $('#mansion').slideUp();
    } else if (userHeight >=140 && userHeight <170){
      $('#dumbo').show();
      $('#pan').show();
      $('#teacup').show();
      $('#splash').show();
      $('#space').show();
      $('#pirates').show();
      $('#dwarf').show();
      $('#rapids').show();
      $('#mansion').show();
    } else {
      $('#dumbo').show();
      $('#pan').show();
      $('#teacup').show();
      $('#splash').show();
      $('#pirates').show();
      $('#rapids').show();
      $('#space').slideUp();
      $('#dwarf').slideUp();
      $('#mansion').slideUp();
    }
  });
});
