// Tailwind configuration
tailwind.config = {
	theme: {
		extend: {
			colors: {
				primary: "#00C853",
				secondary: "#FFC107",
			},
		},
	},
};

// Event information for popup
const eventInfo = {
	Echoes: {
		title: "Echoes",
		content: `<a target="_blank"
									rel="noopener" href="https://drive.google.com/file/d/1Y-oGz_M4Bk-foQO1x_cdTUCMCnVnmjsh/view?usp=sharing;" download><b>Download Now</b></a>`,
	},
	Quizzarad: {
		title: "Quizzarad",
		content: `<a target="_blank"
									rel="noopener" href="https://drive.google.com/file/d/1Tn3gIire3yIkJRoSj8-ibIUr3NWaw45G/view?usp=sharing;" download><b>Download Now</b></a>`,
	},
	DrawMics: {
		title: "DrawMics",
		content: `<a target="_blank"
									rel="noopener" href="https://drive.google.com/file/d/1p1QcoUC_caZd0nOwdNYyWY-3SGpW5r9E/view?usp=sharing.pdf;" download><b>Download Now</b></a>`,
	},
	BattleofBooks: {
		title: "Battle of Books",
		content: `<a target="_blank"
									rel="noopener" href="https://drive.google.com/file/d/1FpRmzdX576-XdyKm2UaQCq5JREu7j9EA/view?usp=sharing;" download><b>Download Now</b></a>`,
	},
	ConCloset: {
		title: "Con-Closet",
		content: `<a target="_blank"
									rel="noopener" href="https://drive.google.com/file/d/1y8NhOTKPOKJ8UlwwuL9aAf2C-oHnT2eQ/view?usp=sharing" download><b>Download Now</b></a>`,
	},
	Dance: {
		title: "Dance and frolics",
		content: `<a target="_blank"
									rel="noopener" href="https://drive.google.com/file/d/1Sb2CKC8gVFH_m11bVrB5PqRoCc_ibfue/view?usp=sharing;" download><b>Download Now</b></a>`,
	},
};

// Typing effect function
function setupTypingEffect() {
	const phrases = [
		"Read → Reflect → Revolutionize",
		"Write → Perform → Transform",
		"Think → Speak → Influence",
		"Learn → Express → Lead",
		"Dream → Create → Resonate",
	];

	const typedTextElement = document.getElementById("typed-text");
	let phraseIndex = 0;
	let charIndex = 0;
	let isDeleting = false;
	let typingSpeed = 100; // Base typing speed in milliseconds

	function typeText() {
		const currentPhrase = phrases[phraseIndex];

		if (isDeleting) {
			// Deleting text
			typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
			charIndex--;
			typingSpeed = 50; // Faster when deleting
		} else {
			// Typing text
			typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
			charIndex++;
			typingSpeed = 100; // Normal speed when typing
		}

		// If finished typing the phrase
		if (!isDeleting && charIndex === currentPhrase.length) {
			// Pause at the end of typing
			isDeleting = true;
			typingSpeed = 1500; // Wait before starting to delete
		}
		// If finished deleting the phrase
		else if (isDeleting && charIndex === 0) {
			isDeleting = false;

			// Move to next phrase
			phraseIndex = (phraseIndex + 1) % phrases.length;

			// Pause before typing next phrase
			typingSpeed = 500;
		}

		setTimeout(typeText, typingSpeed);
	}

	// Start the typing effect
	setTimeout(typeText, 1000);
}

// Main document ready function - combines all event handlers
document.addEventListener("DOMContentLoaded", function () {
	// Initialize typing effect
	setupTypingEffect();

	// DOM elements for modal
	const modal = document.getElementById("event-modal");
	const closeModal = document.getElementById("close-modal");
	const modalTitle = document.getElementById("modal-title");
	const modalContent = document.getElementById("modal-content");
	const modalRegister = document.getElementById("modal-register");

	// Mobile menu toggle
	const menuToggle = document.getElementById("menu-toggle");
	const mobileMenu = document.getElementById("mobile-menu");

	menuToggle.addEventListener("click", () => {
		mobileMenu.classList.toggle("hidden");
	});

	// Smooth scrolling for navigation links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();

			const targetId = this.getAttribute("href");

			// Special case for home - scroll to top
			if (targetId === "#home") {
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			}
			// Check if the target exists for other sections
			else if (targetId !== "#" && document.querySelector(targetId)) {
				document.querySelector(targetId).scrollIntoView({
					behavior: "smooth",
				});
			}

			// Close mobile menu if it's open
			if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
				mobileMenu.classList.add("hidden");
			}
		});
	});

	// Open modal when info button is clicked
	document.querySelectorAll(".info-btn").forEach((button) => {
		button.addEventListener("click", function () {
			const eventType = this.getAttribute("data-event");
			const event = eventInfo[eventType];

			if (event) {
				modalTitle.textContent = event.title;
				modalContent.innerHTML = event.content;
				// Always open the official registration link
				modalRegister.onclick = function () {
					window.open("https://www.amity.edu/nspg/CARNIVALESQUE2025", "_blank");
				};

				// Show modal
				modal.classList.remove("hidden");
				document.body.classList.add("overflow-hidden"); // Prevent background scrolling

				// Reset scroll position to top when opening
				if (modalContent) {
					modalContent.scrollTop = 0;
				}
			}
		});
	});

	// Close modal when clicking the close button
	if (closeModal) {
		closeModal.addEventListener("click", function () {
			modal.classList.add("hidden");
			document.body.classList.remove("overflow-hidden");
		});
	}

	// Close modal when clicking outside the modal content
	if (modal) {
		modal.addEventListener("click", function (e) {
			if (e.target === modal) {
				modal.classList.add("hidden");
				document.body.classList.remove("overflow-hidden");
			}
		});
	}

	// Close modal with Escape key
	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
			modal.classList.add("hidden");
			document.body.classList.remove("overflow-hidden");
		}
	});

	// Handle register buttons in event cards
	document.querySelectorAll(".register-btn").forEach((btn) => {
		btn.addEventListener("click", function (e) {
			// Only open registration link if data-registration-off is NOT present
			if (!btn.hasAttribute("data-registration-off")) {
				e.preventDefault();
				window.open("https://www.amity.edu/nspg/CARNIVALESQUE2025", "_blank");
			}
			// else: let the HTML/modal logic handle the "registration off" case
		});
	});
});

// Initialize favorites from localStorage
document.addEventListener("DOMContentLoaded", function () {
	let favorites = JSON.parse(localStorage.getItem("eventFavorites")) || [];

	// Check if the user has seen the favorites feature before
	if (!localStorage.getItem("favoritesFeatureSeen")) {
		// Find the favorites filter button
		const favBtn = document.querySelector(
			'.filter-btn[data-filter="favorites"]'
		);
		if (favBtn) {
			// Add the pulse animation class
			favBtn.classList.add("new-feature-pulse");

			// Remove pulse effect after the user clicks the button
			favBtn.addEventListener("click", function () {
				this.classList.remove("new-feature-pulse");
				// Save to localStorage so we don't show the pulse again
				localStorage.setItem("favoritesFeatureSeen", "true");
			});
		}
	}

	// Get elements once
	const searchInput = document.getElementById("searchInput");
	const filterButtons = document.querySelectorAll(".filter-btn");
	const eventCards = document.querySelectorAll(".event-card");

	// Track active filter
	let activeFilter = "all";

	// Update heart icons based on saved favorites
	function updateFavoriteButtons() {
		document.querySelectorAll(".favorite-btn").forEach((btn) => {
			const eventType = btn.getAttribute("data-event");
			if (favorites.includes(eventType)) {
				btn.innerHTML = '<i class="fas fa-heart"></i>';
				btn.classList.remove("bg-gray-200", "text-gray-700");
				btn.classList.add("bg-red-100", "text-red-500");
			} else {
				btn.innerHTML = '<i class="far fa-heart"></i>';
				btn.classList.remove("bg-red-100", "text-red-500");
				btn.classList.add("bg-gray-200", "text-gray-700");
			}
		});

		// Update favorites filter button indicator
		const favoritesFilterBtn = document.querySelector(
			'.filter-btn[data-filter="favorites"]'
		);
		if (favoritesFilterBtn) {
			if (favorites.length > 0) {
				favoritesFilterBtn.classList.add("has-favorites");
			} else {
				favoritesFilterBtn.classList.remove("has-favorites");
			}
		}
	}

	// Toast notification system
	function showToast(message) {
		// Create toast if it doesn't exist
		let toast = document.getElementById("toast-notification");
		if (!toast) {
			toast = document.createElement("div");
			toast.id = "toast-notification";
			toast.className =
				"fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-opacity duration-300 opacity-0";
			document.body.appendChild(toast);
		}

		// Show toast
		toast.textContent = message;
		toast.classList.remove("opacity-0");

		// Hide after 3 seconds
		setTimeout(() => {
			toast.classList.add("opacity-0");
		}, 3000);
	}

	// Toggle favorite status
	function toggleFavorite(eventType) {
		const index = favorites.indexOf(eventType);
		if (index === -1) {
			// Add to favorites
			favorites.push(eventType);
			const title =
				(eventInfo[eventType] && eventInfo[eventType].title) ||
				eventType.replace(/([A-Z])/g, " $1").trim();
			showToast(`Added "${title}" to favorites!`);
		} else {
			// Remove from favorites
			favorites.splice(index, 1);
			const title =
				(eventInfo[eventType] && eventInfo[eventType].title) ||
				eventType.replace(/([A-Z])/g, " $1").trim();
			showToast(`Removed "${title}" from favorites!`);
		}

		// Save to localStorage
		localStorage.setItem("eventFavorites", JSON.stringify(favorites));
		updateFavoriteButtons();

		// Re-run search/filter to update the view
		performSearch();
	}

	// Unified search and filter function
	function performSearch() {
		const searchTerm = searchInput.value.toLowerCase().trim();

		eventCards.forEach((card) => {
			// Get the event type from the info button
			const eventType = card
				.querySelector(".info-btn")
				.getAttribute("data-event");

			// Check if the card matches the current filter
			let matchesFilter = false;

			if (activeFilter === "all") {
				matchesFilter = true;
			} else if (activeFilter === "favorites") {
				matchesFilter = favorites.includes(eventType);
			} else {
				matchesFilter = card.getAttribute("data-date") === activeFilter;
			}

			// Check if the card matches the search term
			const eventTitle = card.querySelector("h3").textContent.toLowerCase();
			const eventDescription = card
				.querySelector("p")
				.textContent.toLowerCase();
			const matchesSearch =
				searchTerm === "" ||
				eventTitle.includes(searchTerm) ||
				eventDescription.includes(searchTerm);

			// Show the card only if it matches both the filter and the search
			if (matchesFilter && matchesSearch) {
				card.style.display = "block";
			} else {
				card.style.display = "none";
			}
		});

		// Check if any cards are visible
		updateNoResultsMessage();
	}

	// Update UI to indicate if no events match the current filter/search
	function updateNoResultsMessage() {
		const visibleCards = Array.from(eventCards).filter(
			(card) => card.style.display !== "none"
		);

		// Get the events section
		const eventsSection = document.getElementById("events");
		let noResultsMsg = document.getElementById("no-results-message");

		if (visibleCards.length === 0) {
			// Create a message if there are no visible cards
			if (!noResultsMsg) {
				noResultsMsg = document.createElement("p");
				noResultsMsg.id = "no-results-message";
				noResultsMsg.className =
					"text-center text-gray-500 my-8 p-4 bg-gray-50 rounded-lg max-w-md mx-auto";

				// Find where to insert the message (after the grid div)
				const eventsGrid = eventsSection.querySelector(".grid");
				if (eventsGrid) {
					eventsGrid.parentNode.insertBefore(
						noResultsMsg,
						eventsGrid.nextSibling
					);
				} else {
					eventsSection.appendChild(noResultsMsg);
				}
			}

			if (activeFilter === "favorites") {
				noResultsMsg.textContent =
					"You haven't added any events to your favorites yet.";
			} else if (searchTerm !== "") {
				noResultsMsg.textContent = "No events match your search.";
			} else {
				noResultsMsg.textContent = "No events available for this filter.";
			}

			noResultsMsg.style.display = "block";
		} else if (noResultsMsg) {
			noResultsMsg.style.display = "none";
		}
	}

	// Set up event listeners for favorite buttons
	document.querySelectorAll(".favorite-btn").forEach((btn) => {
		const eventType = btn.getAttribute("data-event");
		btn.addEventListener("click", function (e) {
			e.stopPropagation(); // Prevent event bubbling
			toggleFavorite(eventType);
		});
	});

	// Set up event listeners for filter buttons
	filterButtons.forEach((button) => {
		button.addEventListener("click", function () {
			// Remove active class from all buttons
			filterButtons.forEach((btn) => btn.classList.remove("active"));

			// Add active class to clicked button
			this.classList.add("active");

			// Update active filter
			activeFilter = this.getAttribute("data-filter");

			// Apply filtering
			performSearch();
		});
	});

	// Set up event listener for search input
	if (searchInput) {
		searchInput.addEventListener("input", performSearch);
	}

	// Initialize on page load
	updateFavoriteButtons();
	performSearch();
});

// Countdown Script
const eventDate = new Date("2025-04-25T00:00:00").getTime();

const timer = setInterval(function () {
	const now = new Date().getTime();
	const timeLeft = eventDate - now;

	if (timeLeft <= 0) {
		clearInterval(timer);
		document.getElementById("countdown").innerHTML =
			"<p class='text-xl font-bold text-green-300'>🎉 The Event Has Started!</p>";
		return;
	}

	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	document.getElementById("days").innerText = String(days).padStart(2, "0");
	document.getElementById("hours").innerText = String(hours).padStart(2, "0");
	document.getElementById("minutes").innerText = String(minutes).padStart(
		2,
		"0"
	);
	document.getElementById("seconds").innerText = String(seconds).padStart(
		2,
		"0"
	);
}, 1000);
const swiper = new Swiper(".swiper", {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	speed: 800,
});
// Contact form handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
	contactForm.addEventListener("submit", function (e) {
		e.preventDefault();

		// Get form data
		const formData = {
			name: this.querySelector('input[name="name"]').value,
			email: this.querySelector('input[name="email"]').value,
			subject: this.querySelector('input[name="subject"]').value,
			message: this.querySelector('textarea[name="message"]').value,
		};

		// Create success message element
		const successMessage = document.createElement("div");
		successMessage.className =
			"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4";
		successMessage.innerHTML = `
            <strong class="font-bold">Thank you!</strong>
            <span class="block sm:inline"> Your message has been sent successfully. We'll get back to you soon.</span>
        `;

		// Clear form and show success message
		this.reset();
		this.parentNode.appendChild(successMessage);

		// Remove success message after 5 seconds
		setTimeout(() => {
			successMessage.remove();
		}, 5000);

		// Log form data (for debugging)
		console.log("Form submitted:", formData);
	});
}
