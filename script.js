let slideIndex = 0;

function moveSlide(n) {
    let slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    document.querySelector('.carousel').style.transform = `translateX(${-slideIndex * 100}%)`;
}

function exploreArticles() {
    document.getElementById("articles").scrollIntoView({ behavior: "smooth" });
}
