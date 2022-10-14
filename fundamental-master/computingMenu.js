const scrollBtn = document.querySelector("#bttop");
scrollBtn.addEventListener("click", () => {
	document.body.scrollTop  = 0;
	document.documentElement.scrollTop = 0;
});
document.addEventListener("scroll",(e) => {
	if (document.documentElement.scrollTop <= 400) {
		scrollBtn.style.display = "none";
	}
	else
	{
    scrollBtn.style.display = "block";

	}
});