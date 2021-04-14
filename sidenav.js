function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
  document.getElementById("mySidenav").style.overflow = "initial";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.overflow = "hidden";
}

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var menu = document.getElementsByClassName("menu-btn");
var j;

for (j = 0; j < menu.length; j++) {
  menu[j].addEventListener("click", function () {
    this.classList.toggle("active");
    var menuContent = this.nextElementSibling;
    if (menuContent.style.display === "block") {
      $(this)
        .find($(".menu-icon"))
        .removeClass("fas fa-minus")
        .addClass("fas fa-plus");
      menuContent.style.display = "none";
    } else {
      $(this)
        .find($(".menu-icon"))
        .removeClass("fas fa-plus")
        .addClass("fas fa-minus");
      menuContent.style.display = "block";
    }
  });
}
