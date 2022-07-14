/* Travelling from left to right list items of vd thrives when students flourish */
gsap.to(".gssection", {
	scrollTrigger: {
		trigger: ".btns",
		markers: 0,
		start: "top 60%",
		end: "top 10%",
		toggleActions: "play resume complete complete",
		scrub: true,
	},
	x: "0px",
	color: "#000",
});
/* Color change from black to white */
gsap.to(".gssection", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset ",
		scrub: true,
	},
	color: "#f6f6f6",
});
/* Color change for highlighted words */
gsap.to(".gssection span", {
	scrollTrigger: {
		trigger: ".btns",
		markers: 0,
		start: "top 30%",
		end: "top 0%",
		toggleActions: "play resume complete reset ",
		scrub: true,
	},
	x: "0px",
	color: "#52d6f4",
});
/* Body bg changing from white to black */
gsap.to("body", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset ",
		scrub: false,
	},
	backgroundColor: "#363538",
});
/* Colour change for vd thrives when students flourish */
gsap.to(".section-title h2", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset ",
		scrub: false,
	},
	color: "#f6f6f6",
});

/* ============================== */
/* Hero page section changing rn */

/* Image flip waves */
gsap.to("#hero", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset ",
		scrub: false,
	},
	transform: "rotateX(180deg)",
});

/* End hero section wave rotation */
/* ============================== */

/* ==================================== */
/* Nav Changes */

/* Nav bg-colour changes */
gsap.to("#header", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset ",
		scrub: false,
	},
	color: "#f2f2f2",
	backgroundColor: "#054650",
});

/* Nav logo colour 'V' change */
gsap.to("#logo h1 span", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset ",
		scrub: false,
	},
	color: "#52d6f4",
});
/* Nav logo colour of 'ictory dome' change */
gsap.to("#logo h1 a", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset ",
		scrub: false,
	},
	color: "#f6f6f6",
});

/* Mobile nav icon color change */
gsap.to(".mobile-nav-toggle", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 50%",
		toggleActions: "complete resume complete reset",
		scrub: false,
	},
	color: "#f6f6f6",
});

gsap.to("a.nav-link", {
	scrollTrigger: {
		trigger: "#Header",
		markers: 0,
		end: "top 100%",
		toggleActions: "play resume complete reset",
		scrub: false,
	},
	color: "#000",
});

gsap.to(".navbar-mobile ul", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset",
		scrub: false,
	},
	backgroundColor: "#408697",
});

gsap.to("a.nav-link", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset",
		scrub: false,
	},
	color: "#fff",
});

/* End Nav changes */
/* ==================================== */

/* Vd thrives section change in li colour */
gsap.to(".gssection li", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset ",
		scrub: false,
	},
	color: "#52d6f4",
});
/* Features Section blocks bg-colour change */
gsap.to(".feature-block", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset ",
		scrub: false,
	},
	backgroundColor: "#363538",
});
/* Feature blocks color change */
gsap.to("p.seperator", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset ",
		scrub: false,
	},
	color: "#f6f6f6",
	textAlign: "center !important",
	marginBottom: "40px",
	fontStyle: "creato-bold",
});
gsap.to("#features p, #features h1", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset ",
		scrub: false,
	},
	color: "#f6f6f6",
	textAlign: "left",
	marginBottom: "40px",
	fontStyle: "creato-bold",
});

/* Services section text colour change */
gsap.to(".feature-block h4", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset ",
		scrub: false,
	},
	color: "#f6f6f6",
	textAlign: "center",
});
/* Blog section div adjustment */
gsap.to("#testimonials .blg", {
	scrollTrigger: {
		trigger: ".gssection",
		markers: 0,
		start: "top 50%",
		end: "top 30%",
		toggleActions: "play resume complete reset ",
		scrub: false,
	},
	backgroundColor: "#E0DCE8",
});
