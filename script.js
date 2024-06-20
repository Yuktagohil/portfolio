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
  let currentExperienceIndex = 0;
  let currentEducationIndex = 0;
  
  const experiences = [
      {
          company: "i4Software, USA",
          position: "Software Engineer Intern",
          duration: "July'23 - Sept'23",
          details: [
              "Developed a full-stack web application using React, Firebase, and Node.js on AWS (EC2, S3), improving UI responsiveness and user interaction.",
              "Enhanced mobile app functionality with JavaScript and TypeScript; streamlined development by introducing automated API testing via Postman.",
              "Delivered an MVP for a mobile app in one day using React, integrating best coding practices, and managing cloud infrastructure with Pulumi.",
              "Led a team of 5 in an Agile (Scrum) environment using Git for version control, and Figma for UI/UX design, increasing project delivery speed.",
              "Managed an MVP for a meal planner project utilizing OpenAI API for NLP and MySQL for robust data handling, increasing user base by 50%.",
              "Engineered a personalized meal planner application using Node.js, Express.js, and TensorFlow to generate customized health suggestions, with user tests showing a 90% satisfaction rate"

          ]
      },
      {
          company: "Let's Nurture, India",
          position: "Software Engineer",
          duration: "April'21 - April'22",
          details: [
              "Headed payment solution integration with Python, Django, and PostgreSQL for a food delivery app that reduced payment fraud by 15%",
              "Built secure REST APIs using Python, OAuth2, and JWT for enhanced data integrity and access control, elevating platform reliability by 30%.",
              "Optimized Django search algorithms, achieving a 20% reduction in response time through advanced query optimizations and indexing."
          ]
      }
  ];
  
  const education = [
      {
          degree: "Degree 1",
          institution: "Institution 1, Location",
          duration: "Duration 1",
          details: [
              "Detail 1",
              "Detail 2",
              "Detail 3"
          ]
      },
      {
          degree: "Degree 2",
          institution: "Institution 2, Location",
          duration: "Duration 2",
          details: [
              "Detail 1",
              "Detail 2",
              "Detail 3"
          ]
      }
  ];
  
  function renderExperience(index) {
      const container = document.getElementById('experience-container');
      const content = container.querySelector('.experience-content');
      content.querySelector('.company').textContent = experiences[index].company;
      content.querySelector('.duration').textContent = experiences[index].duration;
      content.querySelector('.position').textContent = experiences[index].position;
      const detailsList = content.querySelector('.details-list');
      detailsList.innerHTML = experiences[index].details.map(detail => `<li>${detail}</li>`).join('');
  }
  
  function nextExperience() {
      currentExperienceIndex = (currentExperienceIndex + 1) % experiences.length;
      renderExperience(currentExperienceIndex);
  }
  
  function prevExperience() {
      currentExperienceIndex = (currentExperienceIndex - 1 + experiences.length) % experiences.length;
      renderExperience(currentExperienceIndex);
  }
  
  function renderEducation(index) {
      const container = document.getElementById('education-container');
      const content = container.querySelector('.education-content');
      content.querySelector('.degree').textContent = education[index].degree;
      content.querySelector('.institution').textContent = education[index].institution;
      content.querySelector('.duration').textContent = education[index].duration;
      const detailsList = content.querySelector('.details-list');
      detailsList.innerHTML = education[index].details.map(detail => `<li>${detail}</li>`).join('');
  }
  
  function nextEducation() {
      currentEducationIndex = (currentEducationIndex + 1) % education.length;
      renderEducation(currentEducationIndex);
  }
  
  function prevEducation() {
      currentEducationIndex = (currentEducationIndex - 1 + education.length) % education.length;
      renderEducation(currentEducationIndex);
  }
  
  // Initialize the first entries
  renderExperience(currentExperienceIndex);
  renderEducation(currentEducationIndex);
    