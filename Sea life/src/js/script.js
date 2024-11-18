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

document.addEventListener("DOMContentLoaded", function () {
	const loadingBar = document.querySelector(".guerriervoire");

	// Fonction qui met à jour la largeur de la barre en fonction de la position de scroll
	function updateLoadingBar() {
		const scrollTop = window.scrollY; // Position actuelle du scroll
		const docHeight = document.body.scrollHeight - window.innerHeight; // Hauteur totale scrollable
		const scrollPercent = (scrollTop / docHeight) * 100; // Pourcentage de scroll

		loadingBar.style.width = scrollPercent + "%"; // Mise à jour de la largeur
	}

	// Appliquer une transition CSS à la barre de chargement
	loadingBar.style.transition = "width 0.18s ease-in-out";

	// Met à jour la barre de chargement en fonction du scroll
	window.addEventListener("scroll", updateLoadingBar);
});

document.addEventListener("DOMContentLoaded", function () {
	const loadingBar = document.querySelector(".guerriervoire");
	let width = 0; // Start width

	// Increment width every 30 milliseconds
	const interval = setInterval(() => {
		if (width >= 100) {
			clearInterval(interval); // Stop the interval when it reaches 100%
		} else {
			width += 1; // Increment width
			loadingBar.style.width = width + "%"; // Apply new width
		}
	}, 30); // Adjust the interval duration as needed
});
document.addEventListener("DOMContentLoaded", function () {
	const fadeInElements = document.querySelectorAll(".fade-in");

	// Fonction pour vérifier si l'élément est visible dans le viewport
	function checkVisibility() {
		fadeInElements.forEach((element) => {
			const rect = element.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			// Si l'élément est visible dans la fenêtre de visualisation
			if (rect.top <= windowHeight && rect.bottom >= 0) {
				element.classList.add("visible");
			}
		});
	}

	// Vérifier la visibilité lors du scroll
	window.addEventListener("scroll", checkVisibility);

	// Vérifier immédiatement au chargement de la page pour les éléments visibles dès le début
	checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
	const soundIcon = document.querySelector(".sound_on");
	const soundOffIcon = document.querySelector(".sound_off");
	const music = new Audio("src/img/sonaqua.mp3");
	music.volume = 0.2;

	soundIcon.addEventListener("click", function () {
		soundIcon.style.display = "none";
		soundOffIcon.style.display = "flex";
		music.pause();
	});

	soundOffIcon.addEventListener("click", function () {
		soundOffIcon.style.display = "none";
		soundIcon.style.display = "flex";
		music.play();
	});
});

// Bloquer le défilement de la page pendant le chargement
document.documentElement.style.overflow = "hidden";

const interval = setInterval(() => {
	const pourcentage = document.querySelector(".pourcentage");
	const chargement = document.querySelector(".chargement");
	const width = chargement.clientWidth;
	const maxWidth = document.body.clientWidth; // Largeur totale de la page

	// Calculer la nouvelle largeur en s'assurant de ne pas dépasser 100 %
	const newWidth = Math.min(width + 1, maxWidth);
	chargement.style.width = `${newWidth}px`;

	// Calculer le pourcentage et l'afficher
	const percentComplete = Math.floor((newWidth / maxWidth) * 100);
	pourcentage.textContent = `${percentComplete}%`;

	// Vérifier si le chargement est terminé
	if (percentComplete >= 100) {
		clearInterval(interval); // Arrêter l'animation
		document.documentElement.style.overflow = ""; // Réactiver le défilement
	}
}, 3);

// Intervalle pour mise à jour rapide
const audio = document.getElementById("quiz-audio");
const options = document.querySelectorAll(".options img");
const result = document.getElementById("result");

// Expected answer for this round
let correctAnswer = "dolphin";

// Play the sound when the page loads
audio.play();

// Add event listeners to the images
options.forEach((option) => {
	option.addEventListener("click", () => {
		const userAnswer = option.getAttribute("data-answer");
		if (userAnswer === correctAnswer) {
			result.textContent = "Bonne réponse ! 🐬";
			result.style.color = "lime";
		} else {
			result.textContent = "Mauvaise réponse. Réessayez !";
			result.style.color = "red";
		}
	});
});
