function removecolor() {
  document.body.style.backgroundColor = "red";
  var x = document.getElementById("colorSelect");
  console.log(x);
  x.remove(x.selectedIndex);
}
