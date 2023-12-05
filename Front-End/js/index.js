// ----------STICKY NAVBAR----------

var navbar = document.querySelector("header");
var sticky = 45
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky-nav")
  }
  if (window.scrollY < sticky) {
    navbar.classList.remove("sticky-nav")
  }
}
window.onscroll = function() {myFunction()};



// ----------SEARCH BOX----------
var dropdownBtn = document.getElementById("search-drop");
var dropdownList = document.getElementById("search-drop-list");
var dropdownIcon = document.getElementById("dropdown-icon");
var searchInput = document.getElementById("search-input");
var dropdownListItems = document.querySelectorAll(".dropdown-list-item")
var dropdownPlaceholder = document.getElementById("search-span");
dropdownBtn.onclick = function(){
  if (dropdownList.classList.contains("show")) {
    dropdownIcon.style.rotate = "0deg"
  }else{
    dropdownIcon.style.rotate = "-180deg";
  }
  dropdownList.classList.toggle("show");
} 
window.onclick = function(e){
  if (
    e.target.id !== "search-drop" && 
    e.target.id !== "search-span" && 
    e.target.id !== "dropdown-icon"
  ) {
    dropdownList.classList.remove("show");
    dropdownIcon.style.rotate = "0deg";
  }
}
for(item of dropdownListItems){
  item.onclick = function(e) {
    dropdownPlaceholder.innerText = e.target.innerText;
    if (e.target.innerText == "Everything") {
      searchInput.placeholder = "Search Anything..."
    }else{
      searchInput.placeholder = "Search in " + e.target.innerText + "..."

    }
  }
}

//---------CATEGORY SLIDER-----------
document.getElementById('next-slide').onclick = function() {
  let SliderList = document.querySelectorAll('.slider-item');
  document.getElementById('category-slide').appendChild(SliderList[0]);
}
document.getElementById('prev-slide').onclick = function() {
  let SliderList = document.querySelectorAll('.slider-item');
  document.getElementById('category-slide').prepend(SliderList[SliderList.length-1]);
}