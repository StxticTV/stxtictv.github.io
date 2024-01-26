// script.js
// GitHub API endpoint to fetch repositories
const apiUrl = 'https://api.github.com/users/StxticTV/repos';

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("water-droplet-container");

    // Function to create a water droplet with random size
    function createDroplet() {
        const droplet = document.createElement("div");
        droplet.className = "water-droplet";
        droplet.style.left = `${Math.random() * 100}%`; // Random horizontal position
        droplet.style.width = `${Math.floor(Math.random() * 30) + 10}px`; // Random width between 10px and 40px
        droplet.style.height = droplet.style.width; // Set height equal to width for a circular shape
        container.appendChild(droplet);
        
        // Remove droplet when it reaches the bottom of the screen
        droplet.addEventListener("animationiteration", function() {
            droplet.remove();
        });
    }

    // Function to generate raindrops at intervals
    function generateRaindrops() {
        setInterval(createDroplet, 200); // Adjust interval for droplet generation
    }

    generateRaindrops(); // Start generating raindrops 
});

// Fetch repositories from GitHub API
fetch(apiUrl)
    .then(response => response.json())
    .then(repositories => {
        const projectsContainer = document.getElementById('projects-container');

        // Iterate through repositories and create HTML elements to display them
        repositories.forEach(repo => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            const projectName = document.createElement('h3');
            projectName.textContent = repo.name;

            const projectDescription = document.createElement('p');
            projectDescription.textContent = repo.description;

            // You can add more details like stars, forks, etc.

            projectCard.appendChild(projectName);
            projectCard.appendChild(projectDescription);

            projectsContainer.appendChild(projectCard);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));