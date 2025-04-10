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
	dance: {
		title: "Dance & Frolic",
		content: `
            <p class="mb-4">Hey there, dance enthusiasts! Get ready to groove and twirl at the exhilarating cultural dance competition—"Dance and Frolic"! Organized by Amity Institute of English Studies and Research as part of our three-day Literature Festival, Carnivalesque 3.0. Immerse yourself in a vibrant celebration of diverse cultures through the universal language of dance. Show off your moves, unleash your creativity, and captivate the audience with your rhythmic prowess. Join us for an experience filled with electrifying performances, friendly competition, and the chance to win exciting prizes. Don't miss out on this opportunity to shine on the dance floor! So, lace up your dancing shoes and let the "Dance and Frolic" extravaganza begin!</p>

            <h4 class="font-bold mt-4">Concept of the Event:</h4>
            <p class="mt-2">Participants are invited to perform any style of dance, including regional, national, or international forms, as a group, while adhering to the rules of each respective style.</p>

            <h4 class="font-bold mt-4">Eligibility:</h4>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Junior Group: Ages 13 to 17</li>
                <li>Senior Group: Ages 17 and above</li>
                <li>Separate category for Amity students</li>
            </ul>

            <h4 class="font-bold mt-4">Rules and Regulations (Offline):</h4>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Performances must have a particular theme related to our rich culture.</li>
                <li>Participants can choose any global dance form (Indian or Western) such as Kathak, Salsa, Jazz, Kathakali, Bharat Natyam, Manipuri, Kuchipudi, Mohiniyattam, Odissi, Sattriya, Hip-Hop, etc.</li>
                <li>Solo or group performances are allowed. Group performances must have between 2 to 5 participants.</li>
                <li>Time limit: 3-5 minutes. Exceeding the time limit will result in negative points.</li>
                <li>Performances should authentically and respectfully showcase cultural traditions and heritage.</li>
                <li>Appropriate attire must be worn to ensure respect for cultural sentiments and norms.</li>
                <li>Music selection should be culturally appropriate and respectful, representing the style and traditions of the dance being performed.</li>
                <li>Judging criteria include costume, visual presentation, expression, coordination, and audience engagement.</li>
                <li>Points will be awarded based on Taal, Technique, Rhythm, Abhinaya (Expression), Attire, Footwork, and overall presentation.</li>
                <li>The decision of the jury will be final; no further claims shall be entertained.</li>
                <li>Non-compliance with any of the above-mentioned rules may lead to disqualification.</li>
            </ul>

            <h4 class="font-bold mt-4">Rules and Regulations (Online):</h4>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Performances must have a particular theme related to our rich culture.</li>
                <li>Participants can choose any global dance form (Indian or Western) such as Kathak, Salsa, Jazz, Kathakali, Bharat Natyam, Manipuri, Kuchipudi, Mohiniyattam, Odissi, Sattriya, Hip-Hop, etc.</li>
                <li>Solo or group performances are allowed. Group performances must have between 2 to 5 participants.</li>
                <li>Time limit: 3-5 minutes. Exceeding the time limit will result in negative points.</li>
                <li>Performances should authentically and respectfully showcase cultural traditions and heritage.</li>
                <li>Appropriate attire must be worn to ensure respect for cultural sentiments and norms.</li>
                <li>Music selection should be culturally appropriate and respectful, representing the style and traditions of the dance being performed.</li>
                <li>Judging criteria include costume, visual presentation, and expression.</li>
                <li>Points will be awarded based on Taal, Technique, Rhythm, Abhinaya (Expression), Attire, Footwork, and overall presentation.</li>
                <li>The decision of the jury will be final; no further claims shall be entertained.</li>
                <li>Videos must be submitted in one continuous take, without any cuts or edits during the performance.</li>
                <li>Poor audio or video quality may lead to elimination.</li>
                <li>Participants must adhere to the specified submission deadline: April 21st, 2024. Submit your video to: danceandfrolicaiesr@gmail.com</li>
                <li>Late submissions will not be accepted.</li>
            </ul>

            <h4 class="font-bold mt-4">Registration:</h4>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Registration fee: Rs.100 (excluding GST).</li>
                <li>No refunds will be initiated once registration is done.</li>
                <li>Registration is compulsory for all participants through the provided link or QR code.</li>
                <li>Non-compliance with any instructions will lead to disqualification.</li>
                <li>Certificate of Participation for all participants.</li>
                <li>Certificate of Merit and prizes for the winners.</li>
                <li>E-certificates will be provided for online participants.</li>
            </ul>

            <h4 class="font-bold mt-4">Note:</h4>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Results for online participation will be announced on our website and social media platforms by April 27th, 2024.</li>
                <li>Participants are required to bring one valid ID card of their institution or organization.</li>
                <li>Refreshments will be offered to participants.</li>
                <li>The cafeteria will be open to all participants; they can bring money for the same.</li>
                <li>For any queries: 8340109368 and 7209746518.</li>
            </ul>
        `,
		registrationUrl: "https://forms.google.com/danceandfrolic",
	},
	DrawMics: {
		title: "DrawMics - Comic Strip Drawing Competition",
		content: `
        <p class="mb-4">Welcome to <strong>DrawMics</strong>, where creativity knows no bounds! Step into the arena of artistic expression and unleash your imagination in an electrifying comic strip drawing competition open to all. Let your unique style shine as you captivate with your innovative creations.</p>

        <h4 class="font-bold mt-4">Concept of the Event:</h4>
        <p class="mt-2">Participants are expected to draw a comic strip narrating a story or concept based on the theme chosen during registration.</p>

        <h4 class="font-bold mt-4">Eligibility:</h4>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Junior Group: Ages 13 to 17</li>
            <li>Senior Group: Ages 17 and above</li>
            <li>Separate category for Amity students</li>
        </ul>

        <h4 class="font-bold mt-4">Rules and Regulations (Offline):</h4>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Glaze sheet will be provided by the organizers</li>
            <li>Any dry medium is allowed (e.g., graphite, charcoal, colored pencils, pastels)</li>
            <li>No wet mediums (e.g., watercolors, acrylics) or digital artwork allowed</li>
            <li>All artwork must be original — no plagiarism</li>
            <li>No mobile phone usage during the competition</li>
            <li>The jury's decision will be final</li>
        </ul>

        <h4 class="font-bold mt-4">Topics for Seniors (Offline & Online):</h4>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Artificial Intelligence</li>
            <li>Cities in the Future</li>
            <li>Animal Abuse</li>
            <li>Aatmanirbhar Bharat</li>
            <li>A Day with Dinosaurs</li>
            <li>Independent Comics</li>
            <li>Socio-Political Commentary</li>
            <li>Manga and Anime Influence</li>
        </ul>

        <h4 class="font-bold mt-4">Topics for Juniors (Offline & Online):</h4>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Underwater World/City</li>
            <li>Deforestation</li>
            <li>Wildlife</li>
            <li>My Dream City/Playground</li>
            <li>If I Were a Superhero</li>
            <li>Villains in Comics</li>
            <li>Sidekick Characters</li>
            <li>Comic Strips Analysis</li>
        </ul>

        <h4 class="font-bold mt-4">Rules and Regulations (Online):</h4>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Individual participation only</li>
            <li>Choose a topic from the list above</li>
            <li>Comic strips must include dialogue or sentences as part of the drawing</li>
            <li>Identity card submission is mandatory</li>
            <li>Each submission must be in PDF format, named as per participant's ID</li>
            <li>Late submissions will not be accepted</li>
            <li>Deadline: April 21st, 2024</li>
            <li>Submit to: <a href="mailto:DrawmicsAIESR@gmail.com" class="text-blue-500 underline">DrawmicsAIESR@gmail.com</a></li>
            <li>Use the provided comic strip template for submissions (View/Download link to be shared separately)</li>
            <li>Poor quality submissions may be rejected</li>
        </ul>

        <h4 class="font-bold mt-4">Registration:</h4>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Registration Fee: ₹100 (excluding GST)</li>
            <li>No refunds post registration</li>
            <li>Participation certificate for all</li>
            <li>Merit certificate and prizes for winners</li>
            <li>E-certificates for online participants</li>
        </ul>

        <h4 class="font-bold mt-4">Note:</h4>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Online results will be announced by April 27th, 2024 on our website and social media</li>
            <li>Participants must carry a valid institutional ID card</li>
            <li>Refreshments will be provided</li>
            <li>The cafeteria will be open (participants may bring money)</li>
            <li>For queries, contact: 8340109368 or 917209746518</li>
        </ul>
    `,
		registrationUrl: "https://forms.google.com/drawmics",
	},

	Quizards: {
		title: "Quizards - The Ultimate Lit & Pop Culture Quiz",
		content: `
        <p class="mb-4">Does literature captivate you, or does the vibrant cinematic world entice you? Welcome to <strong>Quizards</strong> — a quiz like no other! Hosted by the Amity Institute of English Studies and Research, this thrilling adventure will test your knowledge across the world of movies, novels, series, music, and more. Get ready for an enchanting roller coaster of literary and pop culture trivia!</p>

        <h4 class="font-bold mt-4">Concept of the Event:</h4>
        <p class="mt-2">The quiz consists of two rounds:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Round 1:</strong> Questions from English literature including poetry, novels, famous quotes, and dramas.</li>
            <li><strong>Round 2:</strong> Conducted through a PowerPoint presentation with fun and engaging questions based on series, characters, dialogues, and much more.</li>
        </ul>

        <h4 class="font-bold mt-4">Eligibility:</h4>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Junior Group: Ages 13 to 17</li>
            <li>Senior Group: Ages 17 and above</li>
            <li>Separate category for Amity students</li>
        </ul>

        <h4 class="font-bold mt-4">Rules and Regulations:</h4>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Two rounds of competition</li>
            <li>Round 1: 35 questions in 1 hour, 1 point for each correct answer, no negative marking</li>
            <li>Top 10 scorers qualify for Round 2</li>
            <li>Round 2: 5 points for correct answers, -1 for incorrect responses</li>
            <li>Final Round: 6 participants divided into two groups (3 per team)</li>
            <li>Quiz conducted in English only</li>
            <li>Quiz master's rules during the event are final and will be disclosed on the spot</li>
            <li>Use of mobile phones during the quiz is prohibited</li>
            <li>The jury's decision is final</li>
            <li>Failure to follow rules may result in disqualification</li>
        </ul>

        <h4 class="font-bold mt-4">Registration:</h4>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Fee: ₹100 (excluding GST)</li>
            <li>No refunds after registration</li>
            <li>Each participant must register individually</li>
            <li>Registration via the link or QR code is mandatory</li>
            <li>Certificates of Participation for all</li>
            <li>Certificates of Merit and prizes for winners</li>
            <li>E-certificates for online participants</li>
        </ul>

        <h4 class="font-bold mt-4">Note:</h4>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Bring a valid institutional ID card</li>
            <li>Refreshments will be provided</li>
            <li>The cafeteria will be open (participants may bring money)</li>
            <li>Online payments are at participants' own risk — contact us for clarifications</li>
            <li>For queries, contact: 8340109368 or 917209746518</li>
        </ul>
    `,
		registrationUrl: "https://forms.google.com/quizards",
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
				modalRegister.onclick = function () {
					window.open(event.registrationUrl, "_blank");
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
	document.querySelectorAll(".register-btn").forEach((btn, index) => {
		btn.addEventListener("click", function (e) {
			e.preventDefault();

			// Extract event type based on index
			const eventTypes = Object.keys(eventInfo);
			if (index < eventTypes.length) {
				const eventType = eventTypes[index];
				window.open(eventInfo[eventType].registrationUrl, "_blank");
			}
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
			showToast(`Added "${eventInfo[eventType].title}" to favorites!`);
		} else {
			// Remove from favorites
			favorites.splice(index, 1);
			showToast(`Removed "${eventInfo[eventType].title}" from favorites!`);
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
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: this.querySelector('input[name="name"]').value,
            email: this.querySelector('input[name="email"]').value,
            subject: this.querySelector('input[name="subject"]').value,
            message: this.querySelector('textarea[name="message"]').value
        };
        
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4';
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
        console.log('Form submitted:', formData);
    });
}