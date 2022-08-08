const images = ["../images/gh_01.jpg", "../images/gh_02.jpg", "../images/gh_03.jpg" , "../images/gh_04.jpg", "../images/gh_05.jpg"]
// const carousel = document.querySelector(".card-img-top");
const image = document.getElementById("image-slider")
const interval = setInterval(function() {
    startCarousel()
}, 5000)

var index = 1;

startCarousel = () =>{
    image.src = images[index++];
    image.classList.remove("fade");
    void image.offsetWidth;
    image.classList.add("fade");
    if(index > images.length - 1) index = 0;
}
