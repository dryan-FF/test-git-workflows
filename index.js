// from https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
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

function scrollHandler(e) {
  console.log('user scrolled to: ' + e.pageX + ',' + e.pageY, new Date());
}

var debouncedScrollHandler = debounce(scrollHandler, 75, true);
window.on('scroll', debouncedScrollHandler);