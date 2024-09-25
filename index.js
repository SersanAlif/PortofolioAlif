document.getElementById("contactForm").addEventListener("submit", function (event) {
	event.preventDefault();

	var formData = new FormData(this);
	var data = {};
	formData.forEach(function (value, key) {
		data[key] = value;
	});

	fetch("YOUR_WEB_APP_URL", {
		method: "POST",
		contentType: "application/json",
		body: JSON.stringify(data),
	})
		.then((response) => response.text())
		.then((text) => {
			document.getElementById("responseMessage").textContent = text;
		})
		.catch((error) => {
			document.getElementById("responseMessage").textContent = "Terjadi kesalahan: " + error.message;
		});
});

function doPost(e) {
	var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var name = e.parameter.name;
	var email = e.parameter.email;
	var message = e.parameter.message;
	sheet.appendRow([name, email, message]);
	return ContentService.createTextOutput("Data telah dikirim!");
}
// JavaScript to change navbar background on scroll
window.onscroll = function () {
	var navbar = document.querySelector(".custom-navbar");
	if (window.scrollY > 50) {
		// Change the value to adjust when the background changes
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
};
const backToTopButton = document.querySelector(".back-to-top");

backToTopButton.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("profile-pic").addEventListener("click", function () {
	this.setAttribute("data-aos", "zoom-in"); // Apply zoom-in animation on click
	AOS.refresh(); // Refresh AOS to ensure the animation is applied dynamically
});
