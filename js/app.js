 function showAlert() {
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