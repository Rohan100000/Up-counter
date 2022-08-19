var current = document.querySelector(".current");
var next = document.querySelector(".next");
var number = document.getElementById("number");


function start_counter() {
  current.innerHTML = 0;
  next.innerHTML = 1;
  var interval = setInterval(function(){
    var limit = number.value;
    next.classList.add("animate");
    setTimeout(function () {
      current.innerHTML = next.innerHTML;
    }, 500);
    setTimeout(function () {
      next.classList.remove("animate");
      let value = parseInt(next.innerHTML);
      value++;
      next.innerHTML = value;
      if (current.innerHTML == limit) {
        window.alert("Counter has stopped!");
        clearInterval(interval);
        return;
      }
    }, 500);
  }
  , 1000);
}