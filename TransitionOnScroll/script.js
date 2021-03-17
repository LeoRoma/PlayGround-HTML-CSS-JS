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

window.addEventListener('scroll', debounce(checkSlide))