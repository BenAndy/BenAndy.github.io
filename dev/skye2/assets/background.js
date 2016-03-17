// Copyright Benjamin (c) 2015 - All rights reserved

console.log("background.js loaded.");

// Random background selection script
var backgroundNames = Array(61, 62, 63, 64, 65, 66, 67, 68, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60);
var imageUpdateDate = "Sunday, 21<sup>st</sup> February 2016";
var backgroundNumber = function() {
  return backgroundNames[Math.floor(Math.random() * backgroundNames.length)];
};

// Set last updated date in options & information menu
document.getElementById("infoImgUpdt").innerHTML = imageUpdateDate;

// Setting background
var setBackID;
var setBack = function(id) {
  if (id === "random") {
    setBackID = backgroundNumber();
    document.getElementById("header").style.backgroundImage = "url('assets/images/backgrounds/" + setBackID + ".jpg')";
  } else {
    setBackID = id;
    document.getElementById("header").style.backgroundImage = "url('assets/images/backgrounds/" + setBackID + ".jpg')";
  };
};
setBack("random");

// Five minute background change
var newBackID;
setInterval(function() {
  styleOpacity(0, "header", "0");
  styleOpacity(1100, "header", "1");
  setTimeout(function() {
    setBack("random");
  }, 1000);
}, 300000);

// Background image data
var imageData = function(imgUrl, imgAuth, imgAuthPro) {
  // Add image data boxes
};
if (setBackID === 61) {
  imageData("https://unsplash.com/photos/7ALI0RYyq6s", "Мартин Тасев", "https://unsplash.com/pumabg");
} else if (setBackID === 62) {
  imageData("https://unsplash.com/photos/bClr95glx6k", "Vashishta Jogi", "https://unsplash.com/jogi");
} else if (setBackID === 63) {
  imageData("https://unsplash.com/photos/_h7aBovKia4", "Philippe Wuyts", "https://unsplash.com/photos/_h7aBovKia4");
} else if (setBackID === 64) {
  imageData("https://unsplash.com/photos/-oWyJoSqBRM", "Alexey Topolyanskiy", "https://unsplash.com/devilcoders");
} else if (setBackID === 65) {
  imageData("https://unsplash.com/photos/93Ep1dhTd2s", "William Hook", "https://unsplash.com/williamtm")
} else if (setBackID === 66) {
  imageData("https://unsplash.com/photos/KqVHRmHVwwM", "Erez Attias", "https://unsplash.com/erezattias");
} else if (setBackID === 67) {
  imageData("https://unsplash.com/photos/E7q00J_8N7A", "NASA", "https://unsplash.com/nasa");
} else if (setBackID === 68) {
  imageData("https://unsplash.com/photos/U5rMrSI7Pn4", "Metthew Wiebe", "https://unsplash.com/matthewwiebe");
} else if (setBackID === 49) {
  imageData("https://unsplash.com/photos/Xwk4gkiMNGc", "Oliver & Hen Pritchard-Barrett", "https://unsplash.com/olliepb");
} else if (setBackID === 50) {
  imageData("https://unsplash.com/photos/2p1HOcpi14U", "Hide Obara", "https://unsplash.com/hideobara");
} else if (setBackID === 51) {
  imageData("https://unsplash.com/photos/sokDJl8L-fs", "Benjamin", "https://unsplash.com/ben_andy");
} else if (setBackID === 52) {
  imageData("https://unsplash.com/photos/4jcFu1byopQ", "Davide Ragusa", "https://unsplash.com/davideragusa");
} else if (setBackID === 53) {
  imageData("https://unsplash.com/photos/GYumuBnTqKc", "E+N Photographies", "https://unsplash.com/nicomiot");
} else if (setBackID === 54) {
  imageData("https://unsplash.com/photos/6-jTZysYY_U", "NASA", "https://unsplash.com/nasa");
} else if (setBackID === 55) {
  imageData("https://unsplash.com/photos/R3LcfTvcGWY", "Annie Spratt", "https://unsplash.com/fableandfolk");
} else if (setBackID === 56) {
  imageData("https://unsplash.com/photos/GSzD6vGIWKM", "Mickey O'neil", "https://unsplash.com/mickeyoneil");
} else if (setBackID === 57) {
  imageData("https://unsplash.com/photos/uAgLGG1WBd4", "Scott Webb", "https://unsplash.com/scottwebb");
} else if (setBackID === 58) {
  imageData("https://unsplash.com/photos/JibIPPrvITE", "Micheal Hull", "https://unsplash.com/michaelhull");
} else if (setBackID === 59) {
  imageData("https://unsplash.com/photos/-wWRHIUklxM", "Vladimir Kudinov", "https://unsplash.com/madbyte");
} else if (setBackID === 60) {
  imageData("https://unsplash.com/photos/tBtuxtLvAZs", "Matthew Wiebe", "https://unsplash.com/matthewwiebe");
};
