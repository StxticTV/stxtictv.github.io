// script.js

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