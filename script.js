const name = document.querySelector(".name");

// Assuming your selectOption function looks something like this:
function selectOption(option, event) {
    // Stop the click event from propagating to the card overlay
    if (event) {
        event.stopPropagation();
      }
      
      if (option === 'yes') {
        // Flash rainbow colors and then execute a callback function
        flashRainbowColors(function() {
          // Hide an element with id "question" (if it exists in your HTML)
          var questionElem = document.getElementById('question');
          if (questionElem) {
            questionElem.style.display = 'none';
          }
        });
        displayOhhey(function(){

            displayOhhey(); // Display the GIF

        });
        linkclick(function(){

            linkclick();
        });
      } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?';
        
        // Increase font size of the "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
      } else {
        window.alert('Invalid option!');
      }
    }

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 8000); // Flash colors for 8 seconds
}

// Function to display the oh-hey-there-flirty.gif
function displayOhhey() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the oh-hey-there-flirty
    var OhheyImage = new Image();
    // Set the source (file path) for the oh-hey-there-flirty image
    OhheyImage.src = 'oh-hey-there-flirty.gif'; // Assuming the image is named "oh-hey-there-flirty.gif"
    // Set alternative text for the image (for accessibility)
    OhheyImage.alt = 'Ohhey';
    // When the ohhey image is fully loaded, add it to the image container
    OhheyImage.onload = function() {
        OhheyImage.style.width = '300px';
        imageContainer.appendChild(OhheyImage);
        // Hide the options container
        document.getElementById('option').style.display = 'none';

        var songImage = new Image();
        songImage.src = 'song.gif'; // Ensure this file is in the correct folder
        songImage.alt = 'Song Animation';
        // Optionally adjust its size
        songImage.style.width = '280px';
    
        // Append the second GIF below the first one
        imageContainer.appendChild(songImage);
    
        // Create and play the audio (song.mp3)
        var audio = new Audio('SONG.mp3'); // Adjust the path if necessary
        audio.play();
    };
}

function linkclick() {
    setTimeout(function(){
        alert("Copy me: https://open.spotify.com/playlist/4WeFV9FHiQE08tVOS4rjnw?si=4d4ed1e8e700433a");
      }, 500);
}