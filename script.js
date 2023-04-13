function toggleNight(){
    const container1 = document.querySelector('.container-01');
    container1.classList.toggle('night');
}
function toggleNight2(){
    const container1 = document.querySelector('.container-02');
    container1.classList.toggle('night2');
}
VanillaTilt.init(document.querySelector(".container-02 .card"), {
max: 15,
speed: 200,
glare: true,
"max-glare": 1,
});