var a = document.querySelector("input");

function namefocus() {
	var b = document.querySelector("#name i");
	var c = document.querySelector("#name");
	var d = document.querySelector("input");
	b.style.color = "#3573f5";
	b.style.opacity = "1";
	c.style.border = "3px solid #3573f5";
	c.style.transition = "all 0.3s";
	b.style.transition = "all 0.3s";
	d.style.boder = "none";
}

function nameblur() {
	var b = document.querySelector("#name i");
	var c = document.querySelector("#name");
	var d = document.querySelector("input");
	b.style.color = "#000";
	b.style.opacity = "0.5";
	c.style.border = "3px solid #e5e5ea";
	c.style.transition = "all 0.3s";
	b.style.transition = "all 0.3s";
	d.style.boder = "none";
}

/* Mail Focus and blur */
function mailfocus() {
	var b = document.querySelector("#email i");
	var c = document.querySelector("#email");
	var d = document.querySelector("input");
	b.style.color = "#3573f5";
	b.style.opacity = "1";
	c.style.border = "3px solid #3573f5";
	c.style.transition = "all 0.3s";
	b.style.transition = "all 0.3s";
	d.style.boder = "none";
}

function mailblur() {
	var b = document.querySelector("#email i");
	var c = document.querySelector("#email");
	var d = document.querySelector("input");
	b.style.color = "#000";
	b.style.opacity = "0.5";
	c.style.border = "3px solid #e5e5ea";
	c.style.transition = "all 0.3s";
	b.style.transition = "all 0.3s";
	d.style.boder = "none";
}
