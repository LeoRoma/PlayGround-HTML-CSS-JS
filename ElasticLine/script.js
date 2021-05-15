gsap.defaults({ease: "elastic(1, 0.01)"});

let svg  = document.querySelector("svg");
let path = document.querySelector("path");

let connected = false;
let snapDist = 5
let startY = 10;

let mouseCoords = {y: startY};

svg.addEventListener("mousemove", onMove);

gsap.ticker.add(update);
update();

function update() {
    let d = `M0,10 Q50,${mouseCoords.y} 100,10`;
    
    path.setAttribute("d", d);
    
    if (Math.abs(mouseCoords.y - startY) > snapDist * 2) {        
      connected = false;
      gsap.to(mouseCoords, { duration: 1,  y: startY });
    }  
  }

function onMove(event) {
    if (!connected && event.target === path) {    
      connected = true;    
      gsap.killTweensOf(p1);
    }
    
    if (connected) {    
        mouseCoords.y = event.pageY * 2 - (mouseCoords.y + mouseCoords.y) / 2;    
    }
  }