let arr1 = document.getElementById("s1");
let arr2 = document.getElementById("s2");
let arr3 = document.getElementById("s3");
let arr4 = document.getElementById("s4");
let arr5 = document.getElementById("s5");
let text1 = document.getElementById("hide1");
let text2 = document.getElementById("hide2");
let text3 = document.getElementById("hide3");
let text4 = document.getElementById("hide4");
let text5 = document.getElementById("hide5");
let arrow1 = document.getElementById("ar1");
let arrow2 = document.getElementById("ar2");
let arrow3 = document.getElementById("ar3");
let arrow4 = document.getElementById("ar4");
let arrow5 = document.getElementById("ar5");
arr1.addEventListener("click", () => {
	if(text1.style.display === "none" && arrow1.style.transform === "rotate(0deg)") {
		text1.style.display = "block";
		arrow1.style.transform = "rotate(180deg)";
	} else {
		text1.style.display = "none";
		arrow1.style.transform = "rotate(0deg)";
	}
});
arr2.addEventListener("click", () => {
	if(text2.style.display === "none" && arrow2.style.transform === "rotate(0deg)") {
		text2.style.display = "block";
		arrow2.style.transform = "rotate(180deg)";
	} else {
		text2.style.display = "none";
		arrow2.style.transform = "rotate(0deg)";
	}
});
arr3.addEventListener("click", () => {
	if(text3.style.display === "none" && arrow3.style.transform === "rotate(0deg)") {
		text3.style.display = "block";
		arrow3.style.transform = "rotate(180deg)";
	} else {
		text3.style.display = "none";
		arrow3.style.transform = "rotate(0deg)";
	}
});
arr4.addEventListener("click", () => {
	if(text4.style.display === "none" && arrow4.style.transform === "rotate(0deg)") {
		text4.style.display = "block";
		arrow4.style.transform = "rotate(180deg)";
	} else {
		text4.style.display = "none";
		arrow4.style.transform = "rotate(0deg)";
	}
});
arr5.addEventListener("click", () => {
	if(text5.style.display === "none" && arrow5.style.transform === "rotate(0deg)") {
		text5.style.display = "block";
		arrow5.style.transform = "rotate(180deg)";
	} else {
		text5.style.display = "none";
		arrow5.style.transform = "rotate(0deg)";
	}
});