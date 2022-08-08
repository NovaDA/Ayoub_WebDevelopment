const images = ["../images/free-logo.jpg", "../images/free-logo01.jpg", "../images/free-logo02.jpg"]
// const carousel = document.querySelector(".card-img-top");
const image = document.getElementById("image-slider")
const interval = setInterval(function() {
    startCarousel()
}, 3000)

var index = 1;

startCarousel = () =>{
    image.src = images[index++];
    image.classList.remove("fade");
    void image.offsetWidth;
    image.classList.add("fade");
    if(index > images.length - 1) index = 0;
}
