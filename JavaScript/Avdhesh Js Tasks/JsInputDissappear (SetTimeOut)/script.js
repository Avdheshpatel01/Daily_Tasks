counter = setInterval(countdown);
upto = 1000;

function countdown() {
  var count = (document.getElementById("seconds").innerHTML = --upto);
  if (upto == 0) {
    clearInterval(counter);
  }
}

document.getElementById("timeOut").style.display = "none";

setTimeout(() => {
  document.getElementById("timeOut").style.display = "block";
  document.getElementById("password").style.display = "none";
  document.getElementById("button").style.display = "none";
  document.getElementById("time").style.display = "none";
}, 5000);
