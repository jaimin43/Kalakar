var menuClosed = true;
document.querySelector("#nav-toggle").addEventListener("click", function(e) {
	if (menuClosed == true) {
		handleMenuOpen();
	} else {
		handleMenuClose();
	}
	menuClosed = !menuClosed;
});

function handleMenuOpen() {
	//
	// forwards open fullscreen menu
	//
	document
		.querySelector("#nav-menu-container .left")
		.classList.remove("menu-slide-squeeze-right");
	document
		.querySelector("#nav-menu-container")
		.classList.remove("closing-menu-slide-left");
	document
		.querySelector("#nav-menu-container")
		.classList.add("menu-slide-across-full");
	document
		.querySelector("#nav-menu-container .left")
		.classList.add("menu-slide-half-back");
	//
	// remove reverse icon animations
	//
	document
		.querySelector("#nav-toggle")
		.classList.remove("rotate-menu-bars-reverse");
	document
		.querySelector("#nav-toggle .bar-1")
		.classList.remove("top-line-animation-reverse");
	document
		.querySelector("#nav-toggle .bar-3")
		.classList.remove("bottom-line-animation-reverse");
	//
	// add forwards icon animations
	//
	document.querySelector("#nav-toggle").classList.add("rotate-menu-bars");
	document
		.querySelector("#nav-toggle .bar-1")
		.classList.add("top-line-animation");
	document
		.querySelector("#nav-toggle .bar-3")
		.classList.add("bottom-line-animation");
}

function handleMenuClose() {
	document
		.querySelector("#nav-menu-container")
		.classList.add("closing-menu-slide-left");
	document
		.querySelector("#nav-menu-container .left")
		.classList.add("menu-slide-squeeze-right");
	setTimeout(() => {
		document
			.querySelector("#nav-menu-container .left")
			.classList.remove("menu-slide-half-back");
	}, 1000);

	//
	// add reverse icon animations
	//
	document
		.querySelector("#nav-toggle")
		.classList.add("rotate-menu-bars-reverse");
	document
		.querySelector("#nav-toggle .bar-1")
		.classList.add("top-line-animation-reverse");
	document
		.querySelector("#nav-toggle .bar-3")
		.classList.add("bottom-line-animation-reverse");
	//
	// remove forwards icon animations
	//
	document.querySelector("#nav-toggle").classList.remove("rotate-menu-bars");
	document
		.querySelector("#nav-toggle .bar-1")
		.classList.remove("top-line-animation");
	document
		.querySelector("#nav-toggle .bar-3")
		.classList.remove("bottom-line-animation");
}
