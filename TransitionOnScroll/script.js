const images = document.querySelectorAll('.image');
console.log(images)

function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function checkSlide(e){
    images.forEach(image =>{
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
        console.log(slideInAt);
        // bottom of image
        const imageBottom = image.offsetTop + image.height //offsetTop gives the distance from the bottom to the current element
        const isHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast){
            image.classList.add('active');
        }else{
            image.classList.remove('active');
        }
    })
}

function scrollExample(){
    console.log(window.scrollY)
}

window.addEventListener('scroll', debounce(checkSlide))
// window.addEventListener('scroll', debounce(scrollExample))

function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

printLetterByLetter("letter-one-by-one", "Hello world, bonjour le monde.", 100);

const container = document.querySelector('.container');
const text = document.querySelector('.text');
const menu = document.querySelector('.menu');

container.classList.add('open');
menu.classList.add('scroll');

setTimeout(() => {
    text.classList.add('show');
    menu.classList.add('down');
},1000)
