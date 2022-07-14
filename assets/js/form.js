$(document).ready(function () {
	$(".option1").click(function () {
		if ($(this).hasClass("toggled")) {
			$(".option1").removeClass("toggled");
		} else {
			$(this).addClass("toggled");
			appearence();
		}
	});

	$(".option2").click(function () {
		if ($(this).hasClass("toggled")) {
			$(".option2").removeClass("toggled");
		} else {
			$(this).addClass("toggled");
			appearence();
		}
	});

	$(".option3").click(function () {
		if ($(this).hasClass("toggled")) {
			$(".option3").removeClass("toggled");
		} else {
			$(this).addClass("toggled");
			appearence();
		}
	});

	$(".option4").click(function () {
		if ($(this).hasClass("toggled")) {
			$(".option4").removeClass("toggled");
		} else {
			$(this).addClass("toggled");
			appearence();
		}
	});

	$(".option5").click(function () {
		if ($(this).hasClass("toggled")) {
			$(".option5").removeClass("toggled");
		} else {
			$(this).addClass("toggled");
			appearence();
		}
	});

	$(".option6").click(function () {
		if ($(this).hasClass("toggled")) {
			$(".option6").removeClass("toggled");
		} else {
			$(this).addClass("toggled");
			appearence();
		}
	});

	$(".option7").click(function () {
		if ($(this).hasClass("toggled")) {
			$(".option7").removeClass("toggled");
		} else {
			$(this).addClass("toggled");
			appearence();
		}
	});

	$(".option8").click(function () {
		if ($(this).hasClass("toggled")) {
			$(".option8").removeClass("toggled");
		} else {
			$(this).addClass("toggled");
			appearence();
		}
	});

	$(".option9").click(function () {
		if ($(this).hasClass("toggled")) {
			$(".option9").removeClass("toggled");
		} else {
			$(this).addClass("toggled");
			appearence();
		}
	});

	/* Confirmation Animation */
	$(".fa-arrow-right").click(function () {
		var box1 = $(".box1");
		var box2 = $(".box2");
		$(".firstrowbtns, .secondrowbtns, .thirdrowbtns, .appearence").animate(
			{
				opacity: "0",
			},
			"fast"
		);
		setTimeout(function () {
			$(".firstrowbtns, .secondrowbtns, .thirdrowbtns").css({
				display: "none",
			});
		}, 2000);
		box1.addClass("shadow-lg");
		box2.animate({ width: "0%" }, "slow");
		$(".ques").animate({ opacity: "0" }, "slow");
		box1.animate({ width: "100%" }, "slow");
		box1.animate({ width: "50%" }, "slow");
		box2.animate({ width: "50%" }, "slow");
		setTimeout(function () {
			$(".ques").html("Question 2");
		}, 500);
		$(".ques").animate({ opacity: "1" }, "slow");
		$(".appearence").css({ position: "relative" });
		$(".appearence").animate({ top: "1200px" }, "slow");
		setTimeout(function () {
			$(".btns").html(
				"<div class='nametext mt-5 ms-5'>Name</div> <br /> <input type='text' name='names' class='nameinput mt-5 ms-5 ps-1' />"
			);
			$(".appearence").css({ display: "block" });
		}, 1500);
	});

	/* Name Input Click */
	$(".nameinput").click(function () {
		$(".appearence").animate({ top: "0", opacity: "1" });
	});
});

function appearence() {
	var a = [
		document.querySelector(".option1"),
		document.querySelector(".option2"),
		document.querySelector(".option3"),
		document.querySelector(".option4"),
		document.querySelector(".option5"),
		document.querySelector(".option6"),
		document.querySelector(".option7"),
		document.querySelector(".option8"),
		document.querySelector(".option9"),
	];

	for (var i = 0; i <= a.length; i++) {
		if (a[i].classList.contains("toggled")) {
			$(".appearence").css({
				transform: "translateY(0px)",
				transition: "all 0.8s",
			});
		} else if (a[i].classList.contains("toggled")) {
			$(".appearence").ready(function () {
				$(this).css({ transform: "translateY(200px)" });
			});
		}
	}
}
