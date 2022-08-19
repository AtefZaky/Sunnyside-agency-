//variables
const humburgerIcon = document.querySelector('.humburger-icon'),
    navList = document.querySelector('.nav-list');
// Toggle show class on nav list and opacity in the icon
humburgerIcon.onclick = ()=>{
    navList.classList.toggle('show');
    humburgerIcon.classList.toggle('opacity-75');
};

