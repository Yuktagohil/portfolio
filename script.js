function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.getElementById("typed-text");
    const jobTitles = ["Frontend Developer", "Full Stack Developer", "Cloud Engineer", "Android Developer"];
    let currentTitleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenTitles = 1500;
  
    function type() {
      if (isDeleting) {
        if (charIndex > 0) {
          typedText.textContent = jobTitles[currentTitleIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(type, deletingSpeed);
        } else {
          isDeleting = false;
          currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
          setTimeout(type, typingSpeed);
        }
      } else {
        if (charIndex < jobTitles[currentTitleIndex].length) {
          typedText.textContent = jobTitles[currentTitleIndex].substring(0, charIndex + 1);
          charIndex++;
          setTimeout(type, typingSpeed);
        } else {
          isDeleting = true;
          setTimeout(type, delayBetweenTitles);
        }
      }
    }
  
    type();
  });
  