 function showAlert() {
            alert("Welcome to ConwizSolutions — Let's build the future together. We are your one-stop destination for all content & tech related stuffs that includes static websites, captivating writing, editing/proof reading which engages and inspires masses and designing attractive resume and posters that encapsulate your brand's essence and provides expert assistance to the students for multiple assignment works to elevate your ideas into impactful reality.");
        }

        function toggleMenu() {
            document.querySelector('nav').classList.toggle('show');
        }

        const hamburger = document.querySelector('.hamburger');
        hamburger.addEventListener('mousedown', () => {
            hamburger.style.transform = 'scale(0.85)';
        });
        hamburger.addEventListener('mouseup', () => {
            hamburger.style.transform = 'scale(1)';

        }); function showAlert() {
            alert("Welcome to ConwizSolutions — Let's build the future together!");
        }

        function toggleMenu() {
            document.querySelector('nav').classList.toggle('show');
        }

        const hamburger = document.querySelector('.hamburger');
        hamburger.addEventListener('mousedown', () => {
            hamburger.style.transform = 'scale(0.85)';
        });
        hamburger.addEventListener('mouseup', () => {
            hamburger.style.transform = 'scale(1)';
        });
        function openModal(imageSrc, title) {
    document.getElementById("modalImg").src = imageSrc;
    document.getElementById("caption").innerText = title;
    document.getElementById("imageModal").style.display = "block";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

