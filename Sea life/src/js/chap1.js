// Sélection des éléments
const popupTrigger = document.getElementById("popup-trigger");
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popup-close");

// Affiche la popup quand le texte est cliqué
popupTrigger.addEventListener("click", () => {
	popup.classList.remove("hidden");
});

// Masque la popup quand le bouton "Fermer" est cliqué
popupClose.addEventListener("click", () => {
	popup.classList.add("hidden");
});
// Sélection des éléments pour la première popup
const popupTrigger1 = document.getElementById("popup-trigger");
const popup1 = document.getElementById("popup");
const popupClose1 = document.getElementById("popup-close");

// Sélection des éléments pour la deuxième popup
const popupTrigger2 = document.getElementById("popup2-trigger");
const popup2 = document.getElementById("popup2");
const popupClose2 = document.getElementById("popup2-close");

// Affiche la première popup au clic
popupTrigger1.addEventListener("click", () => {
	popup1.classList.remove("hidden");
});

// Ferme la première popup
popupClose1.addEventListener("click", () => {
	popup1.classList.add("hidden");
});

// Affiche la deuxième popup au clic
popupTrigger2.addEventListener("click", () => {
	popup2.classList.remove("hidden");
});

// Ferme la deuxième popup
popupClose2.addEventListener("click", () => {
	popup2.classList.add("hidden");
});
// Gestion dynamique pour toutes les popups
document.querySelectorAll("mark").forEach((mark) => {
	mark.addEventListener("click", () => {
		const targetPopup = document.getElementById(mark.dataset.target);
		targetPopup.classList.remove("hidden");
	});
});

// Gestion de la fermeture pour toutes les popups
document.querySelectorAll(".popup button").forEach((button) => {
	button.addEventListener("click", () => {
		button.closest(".popup").classList.add("hidden");
	});
});
