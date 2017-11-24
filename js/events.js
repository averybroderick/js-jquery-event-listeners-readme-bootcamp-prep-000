function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function submitIt() {
  $('form').on('submit', function() {
    if ($( "input:first" ).val() === "correct") {
      alert('your form is going to be submitted now');
    return;
    }
  })
}

function pressIt() {
  $(document).on('keydown', function(e) {
    if(e.which == 71) {
      console.log("G");
      alert("The G key was pressed down.");
    }
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  submitIt();
  pressIt();
});
