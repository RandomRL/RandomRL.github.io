var bgCount = 11
function randomBG() {
  var num = Math.ceil(Math.random() * bgCount);
  document.body.background = "bg/" + num + ".jpg";
  document.body.style.backgroundSize = "cover";
}
var num = Math.ceil(Math.random() * bgCount);
document.getElementById("bg").style.background = "url('bg/" + num + ".jpg') no-repeat center center fixed";
document.getElementById("bg").style.backgroundSize = "cover";

$( document ).ready(function() {



  var counter = 1;
   $("#add").on("click", function() {
     $("form#block:last").append("<form>     <div class='container topGap block0 center'>       <div contenteditable='true' class='txt left' id='range'>Range: </div>       <input id='min" + counter + "'  type='number' value='100'>       <div class='txt'>-</div>       <input id='max" + counter +"' type='number' value = '500'>       <div class='txt odometer' id='result" + counter + "' >000</div>   </div>   </form>");
     counter++;
   })

  
  var spin = document.getElementById("spin");

  spin.onclick = function () {
    randomBG();
    calculate();
  }

  function calculate () {
    for (var i = 0; i <= counter; i++) {
        $("#result" + i).addClass("odometer");
        var min = parseInt($("#min" + i).val());
        var max = parseInt($("#max" + i).val());
        var result = document.getElementById("result" + i);
        var val = Math.floor(Math.random() * (max - min + 1)) + min;
        result.innerHTML = val;
    }
  }
});
  
  

  /*

  var points2 = function() {    
    min = 100;
    mid1 = 500;
    mid2 = 650;
    max = 1000;
    var regLimit = 1;
    var midLimit = 0.10;
    var maxLimit = 0.05;  
    var num  = 0;
    var r = Math.random();
    if (r <= maxLimit) {
      num = getRandomNum(mid2, max);
    }
  
    else if (r > maxLimit && r <= midLimit) {
      num = getRandomNum(mid1, mid2);
    }
    else {
      num = getRandomNum(min, mid1);
    }  
    return num; 
  }

 /** function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var odometer = document.getElementById('numberSpan')*/
