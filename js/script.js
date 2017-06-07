function showText (el) {
	if(el.previousElementSibling.clientHeight === 80) {
		el.previousElementSibling.style.height = "auto";
    
		el.innerHTML = "ShowLess...";
	} else {
		el.previousElementSibling.style.height = "80px";
		el.innerHTML = "See More...";
	}
}