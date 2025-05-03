// Gallery images data (add more as needed)
const galleryImages = [
	// Example: { src: "/assets/img (1).jpg", alt: "Event 1", date: "2025-04-30" }
	{ src: "/assets/img (1).jpg", alt: "Event 1", date: "2025-04-30" },
	{ src: "/assets/img (2).jpg", alt: "Event 2", date: "2025-04-30" },
	{ src: "/assets/img (6).jpg", alt: "Event 6", date: "2025-05-01" },
	{ src: "/assets/img (7).jpg", alt: "Event 7", date: "2025-05-01" },
	{ src: "/assets/img (8).jpg", alt: "Event 8", date: "2025-04-30" },
	{ src: "/assets/img (9).jpg", alt: "Event 9", date: "2025-05-01" },
	{ src: "/assets/img (10).jpg", alt: "Event 10", date: "2025-04-30" },
	{ src: "/assets/img (11).jpg", alt: "Event 11", date: "2025-05-01" },
	{ src: "/assets/img (13).jpg", alt: "Event 13", date: "2025-04-30" },
	{ src: "/assets/img (14).jpg", alt: "Event 14", date: "2025-05-01" },
	{ src: "/assets/img (15).jpg", alt: "Event 15", date: "2025-04-30" },
	{ src: "/assets/img (16).jpg", alt: "Event 16", date: "2025-05-01" },
	{ src: "/assets/img (17).jpg", alt: "Event 17", date: "2025-04-30" },
	{ src: "/assets/img (18).jpg", alt: "Event 18", date: "2025-05-01" },
	{ src: "/assets/img (19).jpg", alt: "Event 19", date: "2025-04-30" },
	{ src: "/assets/img (20).jpg", alt: "Event 20", date: "2025-05-01" },
	{ src: "/assets/img (21).jpg", alt: "Event 21", date: "2025-04-30" },
	{ src: "/assets/img (22).jpg", alt: "Event 22", date: "2025-05-01" },
	{ src: "/assets/img (23).jpg", alt: "Event 23", date: "2025-04-30" },
	{ src: "/assets/img (25).jpg", alt: "Event 25", date: "2025-05-01" },
	{ src: "/assets/img (26).jpg", alt: "Event 26", date: "2025-04-30" },
	{ src: "/assets/img (27).jpg", alt: "Event 27", date: "2025-05-01" },
	{ src: "/assets/img (28).jpg", alt: "Event 28", date: "2025-04-30" },
	{ src: "/assets/img (29).jpg", alt: "Event 29", date: "2025-05-01" },
];

function renderGallery(images) {
	const wrapper = document.getElementById("gallery-swiper-wrapper");
	wrapper.innerHTML = "";
	images.forEach((img) => {
		const slide = document.createElement("div");
		slide.className = "swiper-slide flex justify-center items-center";
		slide.innerHTML = `<img src="${img.src}" alt="${img.alt}" class="rounded-lg shadow-lg max-h-[350px] w-auto object-contain bg-white" loading="lazy" />`;
		wrapper.appendChild(slide);
	});
}

function showNoImagesMessage(show) {
	const msg = document.getElementById("no-images-message");
	msg.style.display = show ? "block" : "none";
}

function filterImagesByDate(date) {
	if (date === "all") return galleryImages;
	return galleryImages.filter((img) => img.date === date);
}

document.addEventListener("DOMContentLoaded", function () {
	const skeletons = document.getElementById("gallery-skeletons");
	const content = document.getElementById("gallery-content");
	const dateFilter = document.getElementById("dateFilter");

	// Simulate loading
	setTimeout(() => {
		skeletons.style.display = "none";
		content.style.display = "block";
		// Initial render
		renderGallery(galleryImages);
		showNoImagesMessage(galleryImages.length === 0);

		// Init Swiper
		window.gallerySwiper = new Swiper(".swiper", {
			loop: true,
			autoplay: { delay: 3000, disableOnInteraction: false },
			speed: 800,
			pagination: { el: ".swiper-pagination", clickable: true },
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			slidesPerView: 1,
			spaceBetween: 20,
			breakpoints: {
				640: { slidesPerView: 1 },
				768: { slidesPerView: 2 },
				1024: { slidesPerView: 3 },
			},
		});
	}, 1800);

	// Filter by date
	dateFilter.addEventListener("change", function () {
		const selected = this.value;
		const filtered = filterImagesByDate(selected);
		renderGallery(filtered);
		showNoImagesMessage(filtered.length === 0);
		// Update Swiper
		if (window.gallerySwiper) {
			window.gallerySwiper.update();
			window.gallerySwiper.slideTo(0);
		}
	});
});
