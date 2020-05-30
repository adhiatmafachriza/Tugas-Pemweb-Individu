// sticky top navbar
let navbarWrapper = document.getElementById("navbarWrapper");
let navbarOffset = navbarWrapper.offsetTop;

function stickyTop(){
    if(window.pageYOffset >= navbarOffset){
        navbarWrapper.classList.add("sticky");
    }
    else{
        navbarWrapper.classList.remove("sticky");
    }
}

window.onscroll = function(){
    stickyTop();
};

// toggle navbar
let navbar = document.getElementById("navbar");
let btnToggle = document.getElementById("btnToggle");

function navbarToggle(){
    if(navbar.className === "navbar"){
        navbar.classList.add("responsive");
        btnToggle.children[0].classList.remove("fa-bars");
        btnToggle.children[0].classList.add("fa-times", "fa-w-11", "fa-1x");
    }
    else{
        navbar.className = "navbar";
        btnToggle.children[0].classList.remove("fa-times", "fa-w-11", "fa-1x");
        btnToggle.children[0].classList.add("fa-bars");
    }
}

function menuClick(){
    navbar.className = "navbar";
    btnToggle.children[0].classList.remove("fa-times", "fa-w-11", "fa-1x");
    btnToggle.children[0].classList.add("fa-bars");
}

btnToggle.onclick = navbarToggle;
navbar.children[0].onclick = menuClick;
navbar.children[1].onclick = menuClick;
navbar.children[2].onclick = menuClick;
navbar.children[3].onclick = menuClick;

// toggle project
let projectNavBar = document.getElementById("projectNavBar");
let btnProjectToggle = document.getElementById("projectToggle");

function projectToggleClick(){
    if(projectNavBar.className === "project-nav"){
        projectNavBar.classList.add("project-responsive");
        btnProjectToggle.children[0].classList.remove("fa-bars");
        btnProjectToggle.children[0].classList.add("fa-times", "fa-w-11", "fa-1x");
    }
    else{
        projectNavBar.className = "project-nav";
        btnProjectToggle.children[0].classList.add("fa-bars");
        btnProjectToggle.children[0].classList.remove("fa-times", "fa-w-11", "fa-1x");
    }
}

btnProjectToggle.onclick = projectToggleClick;
