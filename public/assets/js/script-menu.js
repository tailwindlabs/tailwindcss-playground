const slideLeftTrigger = document.querySelector('.slide-left-trigger');
const slideLeftMenu = document.querySelector('.slide-left-menu');
const slideLeftClose = document.querySelector('.slide-left-close');

const fullscreenTrigger = document.querySelector('.fullscreen-trigger');
const fullScreenOverlay = document.querySelector('.fullscreen-overlay');
const fullscreenClose = document.querySelector('.fullscreen-close');

const cornerTrigger = document.querySelector('.corner-trigger');
const cornerOverlay = document.querySelector('.corner-overlay');
const cornerClose = document.querySelector('.corner-close');

function closeAll(){
  slideLeftAnimation.pause();
  slideLeftAnimation.seek(0);
  fullscreenAnimation.pause();
  fullscreenAnimation.seek(0);
  cornerAnimation.pause();
  cornerAnimation.seek(0);
}

function openSlideLeft(){
  closeAll();
  slideLeftAnimation.play();
}

function closeSlideLeft(){
  slideLeftAnimation.pause();
  slideLeftAnimation.seek(0);
}

function openFullscreen(){
  closeAll();
  fullscreenAnimation.play();
}

function closeFullscreen(){
  fullscreenAnimation.pause();
  fullscreenAnimation.seek(0);
}

function openCorner(){
  closeAll();
  cornerAnimation.play();
}

function closeCorner(){
  cornerAnimation.pause();
  cornerAnimation.seek(0);
}

slideLeftTrigger.addEventListener('click', openSlideLeft);
slideLeftClose.addEventListener('click', closeSlideLeft);
fullscreenTrigger.addEventListener('click', openFullscreen);
fullscreenClose.addEventListener('click', closeFullscreen);
cornerTrigger.addEventListener('click', openCorner);
cornerClose.addEventListener('click', closeCorner);

//Build the Animejs timeline for showing the menu
var slideLeftAnimation = anime.timeline({
  autoplay:false
});

slideLeftAnimation.add({
  targets:'.slide-left-menu',
  width:'300px',
  duration:50,
  easing:"linear"
})
.add({
  targets:'.slide-left-nav-item',
  marginLeft:"10px",
  delay:function(target, index){
    return index*70;
  }
})
.add({
  targets:'.slide-left-menu .slide-left-close',
  duration:900,
  offset:300,
  translateY:[-250,0],
  easing:'easeInOutElastic'
})


var fullscreenAnimation = anime.timeline({
  autoplay:false
});

fullscreenAnimation.add({
  targets: '.fullscreen-overlay',
  height:'100%',
  duration:400,
  easing:'easeInQuad'
})
.add({
  targets:'.fullscreen-nav-item',
  marginTop:['-200', '0px'],
  duration:1000,
  offset:'-=200',
  delay:function(target, index, total){
    return index*200;
  }
})

var cornerAnimation = anime.timeline({
  autoplay:false
});

cornerAnimation.add({
  targets: '.corner-overlay',
  width:'300px',
  height:'300px',
  opacity:[0,1],
  duration:600,
  easing:'easeOutElastic'
})
.add({
  targets:'.corner-nav-item',
  duration:400,
  offset:20,
  opacity:[0,1],
  translateX:[500,0],
  rotate:[90,0],
  delay:function(target, index){
    return index*75;
  },
  easing:'easeInQuad'
})
.add({
  targets:'.corner-overlay .corner-close',
  duration:350,
  scale:[1,1.3,0.8,1],
  easing:'easeInOutElastic'
})