const menuEl = document.querySelector(".menu");
const moreEl = document.querySelector(".more");
const closeEl = document.querySelector(".close");
const navEl = document.querySelector(".nav");
const homepageEl = document.querySelector(".home-page");

menuEl.addEventListener('click', function () {
    if (closeEl.style.display === "none") {
        closeEl.style.display = "block";
        moreEl.style.display = "none";
        navEl.style.display = "block";
        homepageEl.style.marginTop = "200px";

    }else{
        closeEl.style.display = "none";
        moreEl.style.display = "block";
        navEl.style.display = "none";
        homepageEl.style.marginTop = "0px";
    }    
})
