// Contact form submission alert
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
});

document.querySelectorAll(".project-title").forEach(title => {
    title.style.cursor = "pointer";
    title.onclick = () => {
        document.getElementById("portfolio").style.backgroundColor =
            `rgb(${100+Math.random()*155}, ${100+Math.random()*155}, ${100+Math.random()*155})`;
    };
});