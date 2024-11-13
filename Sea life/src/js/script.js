let currentSection = 0;
const sections = document.querySelectorAll(".section");

function scrollToSection(sectionIndex) {
	currentSection = sectionIndex;
	sections[sectionIndex].scrollIntoView({
		behavior: "smooth",
		duration: 500,
	});
}

window.addEventListener("wheel", (event) => {
	if (event.deltaY > 0) {
		// Scroll down
		if (currentSection < sections.length - 1) {
			scrollToSection(currentSection + 1);
		}
	} else {
		// Scroll up
		if (currentSection > 0) {
			scrollToSection(currentSection - 1);
		}
	}
});
