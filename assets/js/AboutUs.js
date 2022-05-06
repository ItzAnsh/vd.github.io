var tshead = document.querySelector("#tshead");
var tstext = document.querySelector("#tstext");
var btn1 = document.querySelector("#Mobj");
var btn2 = document.querySelector("#Sobj");
var btn3 = document.querySelector("#Lobj");
var btns = document.querySelector("#Btns");
var ss = document.querySelector(".ss");
var btn0 = document.querySelector(".btn0");

//Responsiveness Work on Buttons
function res(resp) {
	if (resp.matches) {
		btns.style.marginTop = "0";
		btn1.style.marginTop = "0px";
		btn2.style.marginTop = "0px";
		btn3.style.marginTop = "0px";
		btn1.style.borderRadius = "0";
		btn1.style.borderTopLeftRadius = "30px";
		btn1.style.borderBottomLeftRadius = "30px";
		btn1.style.padding = "30px";
		return 0;
	} else {
		btn2.style.marginTop = "10%";
		btn3.style.marginTop = "10%";
		btn2.style.marginLeft = "0";
		btn1.style.marginTop = "30vh";
		btn1.style.borderRadius = "30px";
		btn2.style.borderRadius = "30px";
		btn3.style.borderRadius = "30px";
		btn1.style.borderTopLeftRadius = "0";
		btn1.style.borderBottomLeftRadius = "0";
		btn2.style.borderTopLeftRadius = "0";
		btn2.style.borderBottomLeftRadius = "0";
		btn3.style.borderTopLeftRadius = "0";
		btn3.style.borderBottomLeftRadius = "0";
	}
}

var resp = window.matchMedia("(max-width:992px)");
res(resp);
resp.addListener(res);

function chngcont(tshead, tstext, btn1, btn2, btn3) {
	tshead.innerHTML = "Short-Term";
	tstext.innerHTML =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut malesuada eros, laoreet pellentesque massa. Nunc condimentum ullamcorper arcu. Nulla consequat velit ac augue vestibulum, et consectetur justo faucibus. Integer et malesuada arcu. Fusce rhoncus fermentum justo, sed consequat elit volutpat nec. Etiam eget purus nec elit molestie tristique eu id augue. Proin sed accumsan erat. Fusce imperdiet efficitur orci in dignissim. Aenean et tortor nec quam molestie convallis ut sed turpis.";
	btn2.classList.add("tsbtn");
	btn1.classList.remove("tsbtn");
	btn1.classList.add("tsbtn2");
	btn1.style.marginTop = "30vh";
	btn3.classList.remove("tsbtn");
	btn2.style.transition = "border-radius 3s";
	btn2.style.transition = "background-color 2s";
	btn2.style.transition = "all 2s";
	if (res(resp) == 0) {
		btn1.style.marginTop = "0";
		btn2.style.transition = "all 0s";
		btn2.style.transition = "all 0s";
		btn2.style.transition = "background-color 2s";
		btn2.style.borderRadius = "0";
	}
}

function chngcont1(tshead, tstext, btn1, btn2, btn3) {
	tshead.innerHTML = "Main Objective";
	tstext.innerHTML =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut malesuada eros, laoreet pellentesque massa. Nunc condimentum ullamcorper arcu. Nulla consequat velit ac augue vestibulum, et consectetur justo faucibus. Integer et malesuada arcu. Fusce rhoncus fermentum justo, sed consequat elit volutpat nec. Etiam eget purus nec elit molestie tristique eu id augue. Proin sed accumsan erat. Fusce imperdiet efficitur orci in dignissim. Aenean et tortor nec quam molestie convallis ut sed turpis.";
	btn2.classList.remove("tsbtn");
	btn3.classList.remove("tsbtn");
	btn1.style.marginTop = "30vh";
	btn1.style.transition = "border-radius 1s";
	btn1.style.transition = "background-color 0.8s";
	btn1.style.transition = "all 2s";
	btn1.classList.add("tsbtn");
	if (res(resp) == 0) {
		btn1.style.marginTop = "0";
		btn1.style.transition = "all 0s";
		btn1.style.transition = "background-color 0.8s";
	}
}

function chngcont2(tshead, tstext, btn1, btn2, btn3) {
	tshead.innerHTML = "Long Term";
	tstext.innerHTML =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut malesuada eros, laoreet pellentesque massa. Nunc condimentum ullamcorper arcu. Nulla consequat velit ac augue vestibulum, et consectetur justo faucibus. Integer et malesuada arcu. Fusce rhoncus fermentum justo, sed consequat elit volutpat nec. Etiam eget purus nec elit molestie tristique eu id augue. Proin sed accumsan erat. Fusce imperdiet efficitur orci in dignissim. Aenean et tortor nec quam molestie convallis ut sed turpis.";
	btn1.classList.remove("tsbtn");
	btn1.style.marginTop = "30vh";
	btn1.classList.add("tsbtn2");
	btn2.classList.remove("tsbtn");
	btn3.classList.add("tsbtn");
	btn3.style.transition = "border-radius 3s";
	btn3.style.transition = "background-color 2s";
	btn3.style.transition = "all 2s";
	if (res(resp) == 0) {
		btn1.style.marginTop = "0";
		btn3.style.transition = "all 0s";
		btn3.style.transition = "background-color 0.8s";
		btn3.style.borderTopLeftRadius = "0";
		btn3.style.borderBottomLeftRadius = "0";
	}
}
