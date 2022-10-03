let btncount = document.getElementById("count");
let addbtn = document.getElementById("add");
let minusbtn = document.getElementById("minus");
let total = document.getElementById("total");
let totalall = document.getElementById("totalall");
addbtn.onclick = function () {
  let value = btncount.innerHTML++;
  total.innerHTML = 78 * value + "$";
  totalall.innerHTML = 78 * value + "$";
};
minusbtn.onclick = function () {
  if (btncount.innerHTML > 0) {
    let value = btncount.innerHTML--;
    total.innerHTML = 78 * value + "$";
    totalall.innerHTML = 78 * value + "$";
  }
};

let close = document.getElementsByClassName("close")[0];
let divcomplete = document.getElementById("comp");
close.onclick = function () {
  divcomplete.style.display = "none";
};
