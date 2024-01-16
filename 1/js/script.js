function customScrollFunction(id, top) {
   document.getElementById(id).addEventListener("click", () => {
     window.scrollTo({
       top,
       left: 0,
       behavior: "smooth",
     });
   });
 }
 
 customScrollFunction("portfolio", 200);
 customScrollFunction("team", 950);
 customScrollFunction("about", 1700);
 customScrollFunction("blog", 4500);
 customScrollFunction("contacts", 4850);

const play = document.querySelector('.about__play');
const video = document.querySelector('.about__video video')

play.addEventListener ('click', () => {
   video.play();
   video.setAttribute('controls', 'controls');
   play.classList.add('about__play--hidden');
})