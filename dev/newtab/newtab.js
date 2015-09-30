// Copyright Benjamin (c) All rights reserved - 2015
// Special thanks to Caleb Stewart for helping me with the random background image selection!
// https://twitter.com/RagingCow25

document.title = "New Tab";
console.log("New Tab page copyright (c) Benjamin, 2015 - All rights reserved.");
var backNumber = 24;
var randomBackground = Math.floor((Math.random() * backNumber) + 1);

function linkHover() {
  document.getElementById("link").style.opacity = "1";
}

function linkOutHover() {
  document.getElementById("link").style.opacity = "0.7";
}

function options() {
  document.getElementById("optionsMenu").style.visibility = "visible";
  document.getElementById("optionsMenu").style.opacity = "0.9";
  document.getElementById("optionsImg").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("optionsImg").style.visibility = "hidden";
  }, 600);
}

function optionsClose() {
  document.getElementById("optionsImg").style.visibility = "visible";
  document.getElementById("optionsMenu").style.opacity = "0";
  document.getElementById("optionsImg").style.opacity = "0.9";
  setTimeout(function() {
    document.getElementById("optionsMenu").style.visibility = "hidden";
  }, 600);
}

function optionsNEWBACK() {
  setTimeout(function() {
    var newBack = Math.floor((Math.random() * backNumber) + 1);
    document.getElementById("header").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("header").style.backgroundImage = "url('content/background/back" + newBack + ".jpg')";
      setTimeout(function() {
        document.getElementById("header").style.opacity = "1";
      }, 200);
    }, 500);
    setTimeout(function() {
      var newimgURL = "http://benandy.github.io/dev/newtab/content/background/back" + newBack + ".jpg";
      document.getElementById("optionNEWBACK").innerHTML = "<a onclick='optionsNEWBACK()'>Change the Background image</a> [ID: " + newBack + "]";
      document.getElementById("ImageURL").innerHTML = "<a href='" + newimgURL + "' target='_blank'>" + newimgURL + "</a>";
    }, 100);
  }, 500);
}

function optionsRELOAD() {
  document.getElementById("optionRELOAD").innerHTML = "<a onclick='optionsRELOAD()'>Reloading...</a>";
  document.getElementById("optionsMenu").style.opacity = "0";
  document.getElementById("link").style.opacity = "0";
  document.getElementById("body").style.opacity = "0";
  setTimeout(function() {
    window.location = "";
  }, 2500);
}

function optionsSOCIALMEDIA1() {
  document.getElementById("optionSocialMedia").innerHTML = "<a onclick='optionsSOCIALMEDIA2()'>Social media icons</a> [OFF]";
  document.getElementById("link").style.opacity = "0";
}

function optionsSOCIALMEDIA2() {
  document.getElementById("optionSocialMedia").innerHTML = "<a onclick='optionsSOCIALMEDIA1()'>Social media icons</a> [ON]";
  document.getElementById("link").style.opacity = "0.6";
}

setTimeout(function() {
  var imgURL = "http://benandy.github.io/dev/newtab/content/background/back" + randomBackground + ".jpg";
  document.getElementById("ImageUpdateDate").innerHTML = "Wednesday, 23<sup>rd</sup> September 2015";
  document.getElementById("ImageURL").innerHTML = "<a href='" + imgURL + "' target='_blank'>" + imgURL + "</a>";
  document.getElementById("optionNEWBACK").innerHTML = "<a onclick='optionsNEWBACK()'>Change the background image</a> [ID: " + randomBackground + "]";
  console.log("Background ID: " + randomBackground + "\nSource:" + imgURL);
  setTimeout(function() {
    document.getElementById("body").style.opacity = "1";
    setTimeout(function() {
      document.getElementById("optionsImg").style.opacity = "1";
      setTimeout(function() {
        document.getElementById("link1").style.opacity = "1";
        setTimeout(function() {
          document.getElementById("link2").style.opacity = "1";
          setTimeout(function() {
            document.getElementById("link3").style.opacity = "1";
            setTimeout(function() {
              document.getElementById("link4").style.opacity = "1";
              setTimeout(function() {
                document.getElementById("link5").style.opacity = "1";
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 2000);
  }, 2000);
  if (randomBackground == 1) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back1.jpg')";
  };

  if (randomBackground == 2) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back2.jpg')";
  };

  if (randomBackground == 3) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back3.jpg')";
  };

  if (randomBackground == 4) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back4.jpg')";
  };

  if (randomBackground == 5) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back5.jpg')";
  };

  if (randomBackground == 6) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back6.jpg')";
  };

  if (randomBackground == 7) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back7.jpg')";
  };

  if (randomBackground == 8) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back8.jpg')";
  };

  if (randomBackground == 9) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back9.jpg')";
  };

  if (randomBackground == 10) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back10.jpg')";
  };

  if (randomBackground == 11) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back11.jpg')";
  };

  if (randomBackground == 12) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back12.jpg')";
  };

  if (randomBackground == 13) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back13.jpg')";
  };

  if (randomBackground == 14) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back14.jpg')";
  };

  if (randomBackground == 15) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back15.jpg')";
  };

  if (randomBackground == 16) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back16.jpg')";
  };

  if (randomBackground == 17) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back17.jpg')";
  };

  if (randomBackground == 18) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back18.jpg')";
  };

  if (randomBackground == 19) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back19.jpg')";
  };

  if (randomBackground == 20) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back20.jpg')";
  };

  if (randomBackground == 21) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back21.jpg')";
  };

  if (randomBackground == 22) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back21.jpg')";
  };

  if (randomBackground == 23) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back21.jpg')";
  };

  if (randomBackground == 24) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back21.jpg')";
  };
}, 50); // NOTE WHEN ADDING NEW BACKGROUNDS CHANGE BACKGROUND VALUE AT TOP OF PAGE

var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

setInterval(GetClock,100);
function GetClock() {
  var d=new Date();
  var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
  var d=new Date();
  var nhour=d.getHours(),nmin=d.getMinutes(),ap;
  var thour = d.getHours();

  if (nhour == 0) {
    ap=" AM";
    nhour=12;
  } else if (nhour < 12) {
    ap=" AM";
  } else if (nhour == 12) {
    ap=" PM";
  } else if (nhour > 12) {
    ap=" PM";
    nhour-=12;
  }

  if (nmin<=9) {
    nmin="0"+nmin;
  }

  document.getElementById("datebox").innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+"";
  document.getElementById("clockbox").innerHTML=""+nhour+":"+nmin+ap+"";

  setTimeout(function() {
    var alertShow = document.getElementById("dateAlert").style.opacity = "1";
    var alertName = document.getElementById("dateAlert");
    var titleAlert = setTimeout(function() {document.title = thisAlert;}, 500);

    if (tmonth[nmonth] == "January") {
      if (ndate == 1) {
        var thisAlert = "Happy new year!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; titleAlert}, 1000);
      };
    } else if (tmonth[nmonth] == "February") {

    } else if (tmonth[nmonth] == "March") {
      if (ndate == 27) {
        var thisAlert = "Happy Easter!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; titleAlert}, 1000);
      };
    } else if (tmonth[nmonth] == "April") {

    } else if (tmonth[nmonth] == "May") {
      if (ndate == 2) {
        var thisAlert = "Happy birthday, Caleb";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; titleAlert}, 1000);
      };
    } else if (tmonth[nmonth] == "June") {

    } else if (tmonth[nmonth] == "July") {

    } else if (tmonth[nmonth] == "August") {

    } else if (tmonth[nmonth] == "September") {
      if (ndate == 11) {
        var thisAlert = "Happy birthday, Chantalle!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; titleAlert}, 1000);
      };
    } else if (tmonth[nmonth] == "October") {
      if (ndate == 1) {
        var thisAlert = "Emma is love <3"; // THIS WAS A DARE >.>
        document.getElementById("welcomeMessage").style.visibility = "hidden"; // THIS WAS A DARE >.>
        alertName.innerHTML = thisAlert; // THIS WAS A DARE >.>
        setTimeout(function() {alertShow; titleAlert}, 1000); // THIS WAS A DARE >.>
      };
      if (ndate == 17) {
        var thisAlert = "Happy birthday, Benjamin";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; titleAlert}, 1000);
      };
      if (ndate == 28) {
        var thisAlert = "Happy birthday, Vijay!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; titleAlert}, 1000);
      };
    } else if (tmonth[nmonth] == "November") {
      if (ndate == 16) {
        var thisAlert = "Happy birthday, Emma!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; titleAlert}, 1000);
      };
    } else if (tmonth[nmonth] == "December") {
      if (ndate == 24) {
        var thisAlert = "Merry Christmas!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; titleAlert}, 1000);
      };
    } else {
      document.getElementById("dateAlert").style.visibility = "hidden";
    }
  }, 2000);

  setTimeout(function() {
    if (thour < 11) {
      document.getElementById("welcomeMessage").innerHTML = "Good morning";
      setTimeout(function() {
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour < 18) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good afternoon";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good evening";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    }
  }, 3000);
}

function keypress(e) {
  e = e || window.event;
  if (e.keyCode == "27") {
    document.getElementById("optionsMenu").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("optionsMenu").style.visibility = "hidden";
      document.getElementById("optionsImg").style.visibility = "visible";
      document.getElementById("optionsImg").style.opacity = "0.9";
    }, 600);
  }
}
