gsap.defaults({ ease: "elastic(1, 0.01)" });

let svgs = document.querySelectorAll("svg");
let paths = document.querySelectorAll("path");

console.log(paths[2])

let connected = false;
let snapDist = 30;
let startY = 10;

let mousePosition = { y: startY };


for (let i = 0; i < svgs.length; i++) {
    const svg = svgs[i];
    const path = paths[i];
    svg.addEventListener("mousemove", (event) => {
        if (!connected && event.target === path) {
            connected = true;
            gsap.killTweensOf(mousePosition);
        }
    
        if (connected) {
            mousePosition.y = event.pageY * 2 - (mousePosition.y + mousePosition.y) / 2;
        }
        update(path);
    });
    svg.addEventListener('mouseout', event => {
        gsap.to(path, {ease: "elastic(1, 0.1)", attr: {d: "M0,10 Q50,10 100,10"}})
    })
  
}

function update(path) {
    // console.log(path)
    // let d = `M0,10 Q50,${mousePosition.y} 100,10`;
    let d = `M0,10 Q50,30 100,10`;

    path.setAttribute("d", d);
    // console.log(mousePosition.y)
    if (mousePosition.y > snapDist) {
        connected = false;
        gsap.to(mousePosition, { duration: 1, y: startY });
    }
}

// function onMove(event) {
//     if (!connected && event.target === path) {
//         connected = true;
//         gsap.killTweensOf(mousePosition);
//     }

//     if (connected) {
//         mousePosition.y = event.pageY * 2 - (mousePosition.y + mousePosition.y) / 2;
//     }
// }