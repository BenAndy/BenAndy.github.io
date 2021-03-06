// Copyright Benjamin Developments (c) 2016 - All rights reserved

var appVersion = "1.0.1 Beta 5";
console.log("Benjamin Photography version " + appVersion);

// Loading animations
var loadSpin = function() {
  var loadSpinDeg = 0;
  var loadSpin = setInterval(function() {
    if (loadSpinDeg === 361) {
      loadSpinDeg = 0;
    } else {
      loadSpinDeg++;
    };
    document.getElementById("loadingImage").style.transform = "rotate(" + loadSpinDeg + "deg)";
  }, 1);
};
if (loadSpin) {
  loadSpin();
};

// Page loading complete
window.onload = function() {
  setTimeout(function() {
    document.getElementById("loadingImage").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("backgroundImage").style.opacity = "0.4";
      document.getElementById("loadingImage").style.visibility = "hidden";
      document.getElementById("loadingImage").style.marginTop = "0";
      document.getElementById("loadingImage").style.height = "0";
      clearInterval(loadSpin);
      setTimeout(function() {
        document.getElementById("title").style.opacity = "1";
        document.getElementById("navigationBar").style.opacity = "1";
      }, 300);
    }, 500);
  }, 100);
};

// Navigation bar & title
if (mainIndex || aboutPage) {
  // Make navigation bar & title
  document.getElementById("title").innerHTML = "Benjamin Photography";
  document.getElementById("navigationBar").innerHTML = "<span id='navOptionMyPhotos' class='navOption'>My Photos</span> - <span id='navOptionUnsplash' class='navOption'>Unsplash</span> - <span id='navOptionContact' class='navOption'>Contact</span> - <span id='navOptionFacebook' class='navOption'>Facebook</span> - <span id='navOptionAbout' class='navOption'>About</span>";
  // Title
  document.getElementById("title").addEventListener("click", function() {
    window.location = "index.html";
  }, false);
  // My Photos
  document.getElementById("navOptionMyPhotos").addEventListener("click", function() {
    // my photos page redirect
  }, false);

  // Unsplash
    document.getElementById("navOptionUnsplash").addEventListener("click", function() {
      window.open("https://unsplash.com/@ben_andy", "_blank");
    }, false);

  // Contact
  document.getElementById("navOptionContact").addEventListener("click", function() {
    // contact redirect
  }, false);

  // Facebook
  document.getElementById("navOptionFacebook").addEventListener("click", function() {
    window.open("https://www.facebook.com/BenjaPhotog/", "_blank");
  }, false);

  // About
  document.getElementById("navOptionAbout").addEventListener("click", function() {
    window.location = "about.html";
  }, false);
};
