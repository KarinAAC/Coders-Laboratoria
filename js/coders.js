window.addEventListener ("load",function (e){
  var seleccionar = document.getElementById("seleccionar");
  var chile4      = document.getElementById("chile");
  var lima5       = document.getElementById("lima5");
  var lima6       = document.getElementById("lima6");
  var alumna      = document.getElementById("alumna");

  seleccionar.onchange = function (){
    if(seleccionar.value == "chile"){
      chile4.style.display = "block";
      lima5.style.display  = "none";
      lima6.style.display  = "none";
    }
    else if(seleccionar.value == "lima5"){
      lima5.style.display  = "block";
      lima6.style.display  = "none";
      chile4.style.display = "none";
    }
    else if(seleccionar.value == "lima6"){
      lima6.style.display  = "block";
      lima5.style.display  = "none";
      chile4.style.display = "none";
    }
  }
});
