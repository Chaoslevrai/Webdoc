// =====================================
// Section 1: Scroll to Sections on Wheel Event
// =====================================

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

// =====================================
// Section 2: Mise à jour de la barre de chargement
// =====================================

document.addEventListener("DOMContentLoaded", function () {
	const loadingBar = document.querySelector(".guerriervoire");

	function updateLoadingBar() {
		const scrollTop = window.scrollY;
		const docHeight = document.body.scrollHeight - window.innerHeight;
		const scrollPercent = (scrollTop / docHeight) * 100;

		loadingBar.style.width = scrollPercent + "%";
	}

	loadingBar.style.transition = "width 0.18s ease-in-out";

	window.addEventListener("scroll", updateLoadingBar);
});

// =====================================
// Section 3: Animation de la barre de chargement au démarrage
// =====================================

document.addEventListener("DOMContentLoaded", function () {
	const loadingBar = document.querySelector(".guerriervoire");
	let width = 0;

	const interval = setInterval(() => {
		if (width >= 100) {
			clearInterval(interval);
		} else {
			width += 1;
			loadingBar.style.width = width + "%";
		}
	}, 30);
});

// =====================================
// Section 4: Animation de l'apparition des éléments
// =====================================

document.addEventListener("DOMContentLoaded", function () {
	const fadeInElements = document.querySelectorAll(".fade-in");

	function checkVisibility() {
		fadeInElements.forEach((element) => {
			const rect = element.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			if (rect.top <= windowHeight && rect.bottom >= 0) {
				element.classList.add("visible");
			}
		});
	}

	window.addEventListener("scroll", checkVisibility);
	checkVisibility();
});

// =====================================
// Section 5: Contrôle du son
// =====================================

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

// =====================================
// Section 6: Bloquer le défilement pendant le chargement
// =====================================

document.documentElement.style.overflow = "hidden";

const interval = setInterval(() => {
	const pourcentage = document.querySelector(".pourcentage");
	const chargement = document.querySelector(".chargement");
	const width = chargement.clientWidth;
	const maxWidth = document.body.clientWidth;

	const newWidth = Math.min(width + 1, maxWidth);
	chargement.style.width = `${newWidth}px`;

	const percentComplete = Math.floor((newWidth / maxWidth) * 100);
	pourcentage.textContent = `${percentComplete}%`;

	if (percentComplete >= 100) {
		clearInterval(interval);
		document.documentElement.style.overflow = "";
	}
}, 3);

// =====================================
// Section 7: Quiz Interaction
// =====================================

const audio = document.getElementById("quiz-audio");
const optionsContainer = document.querySelector(".options");
const questionContainer = document.querySelector(".question");
const result = document.getElementById("result");

let currentQuestionIndex = 0;
const questions = [
	{
		question: "Quel animal marin produit ce son ?",
		sound: "src/imganimaux/Turtle_sound.mp3",
		correctAnswer: "Tortue",
		options: [
			{
				text: "Beluga",
				answer: "Requin",
				img: "src/imganimaux/requin.png",
			},
			{
				text: "Crabe",
				answer: "Crabe",
				img: "src/imganimaux/crabe.png",
			},
			{
				text: "Tortue",
				answer: "Tortue",
				img: "src/imganimaux/tortue.png",
			},
		],
	},
	{
		question: "Quel animal fait ce bruit ?",
		sound: "src/imganimaux/Whale_sound.mp3",
		correctAnswer: "Requin",
		options: [
			{
				text: "Tortue",
				answer: "Tortue",
				img: "src/imganimaux/tortue.png",
			},
			{
				text: "Requin",
				answer: "Requin",
				img: "src/imganimaux/requin2.png",
			},
			{
				text: "Crabes",
				answer: "Crabes",
				img: "src/imganimaux/crabe.png",
			},
		],
	},
	{
		question: "Quel animal produit ce bruit ?",
		sound: "src/imganimaux/rays.mp3",
		correctAnswer: "Raies",
		options: [
			{
				text: "Dauphin",
				answer: "dolphin",
				img: "src/imganimaux/pieuvre.png",
			},
			{
				text: "Raies",
				answer: "Raies",
				img: "src/imganimaux/raie.png",
			},
			{
				text: "Phoque",
				answer: "seal",
				img: "src/imganimaux/manchot.png",
			},
		],
	},
	{
		question: "Quel animal produit ce son ?",
		sound: "src/imganimaux/seahorse.mp3",
		correctAnswer: "seahorse",
		options: [
			{
				text: "seahorse",
				answer: "seahorse",
				img: "src/imganimaux/hyppo.png",
			},
			{
				text: "poisson",
				answer: "poisson",
				img: "src/imganimaux/poisson.png",
			},
			{
				text: "raie",
				answer: "raie",
				img: "src/imganimaux/raie.png",
			},
		],
	},
];

function loadQuestion() {
	const currentQuestion = questions[currentQuestionIndex];
	questionContainer.textContent = currentQuestion.question;
	audio.src = currentQuestion.sound;

	optionsContainer.innerHTML = "";

	currentQuestion.options.forEach((option) => {
		const optionElement = document.createElement("img");
		optionElement.src = option.img;
		optionElement.alt = option.text;
		optionElement.setAttribute("data-answer", option.answer);
		optionsContainer.appendChild(optionElement);
	});
}

function checkAnswer(userAnswer) {
	const currentQuestion = questions[currentQuestionIndex];
	if (userAnswer === currentQuestion.correctAnswer) {
		result.textContent = "Bonne réponse ! 🐬";
		result.style.color = "lime";
	} else {
		result.textContent = "Mauvaise réponse. Réessayez !";
		result.style.color = "red";
	}

	setTimeout(() => {
		result.textContent = "";
		if (currentQuestionIndex < questions.length - 1) {
			currentQuestionIndex++;
			loadQuestion();
		} else {
			result.textContent = "Quiz terminé !";
			result.style.color = "blue";
		}
	}, 2000);
}

document.querySelector(".play").addEventListener("click", () => {
	audio.play();
});

optionsContainer.addEventListener("click", (event) => {
	if (event.target.tagName === "IMG") {
		const userAnswer = event.target.getAttribute("data-answer");
		checkAnswer(userAnswer);
	}
});

loadQuestion();
