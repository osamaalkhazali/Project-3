"use strict";

var skills = document.querySelectorAll(".range span");
var our = document.querySelector("#ourskills");
var up = document.querySelector(".up"); // Stats
// let money = document.querySelector(".money")
// let countries = document.querySelector(".countries")
// let projects = document.querySelector(".projects")
// let clients = document.querySelector(".clients")

var stat = document.querySelectorAll(".stat span");
var stats = document.querySelector("#stats");

window.onscroll = function () {
  // stats
  if (window.scrollY >= stats.offsetTop - 500) {
    stat.forEach(function (span) {
      var goal = span.dataset.to;
      var tostat = setInterval(function () {
        if (span.textContent === goal) {
          clearInterval(tostat);
        } else {
          span.textContent++;
        }
      }, 10); // span.textContent = span.dataset.to
    });
  } // Skills


  if (window.scrollY >= our.offsetTop) {
    skills.forEach(function (span) {
      span.style.width = span.dataset.status;
    });
  } // Up


  if (window.scrollY > 200) {
    up.classList.add("show");
  } else if (window.scrollY < 200) {
    up.classList.remove("show");
  }
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}; // Scroller


window.addEventListener("load", function () {
  var scroll = document.querySelector(".scroll");
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  window.addEventListener("scroll", function () {
    var scrolltop = document.documentElement.scrollTop;
    scroll.style.width = "".concat(scrolltop / height * 100, "%");
  });
}); // Event

var days = document.querySelector(".days");
var hours = document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
var joy = new Date("aug 6 2023");
joy.setHours(5);
var counter = setInterval(function () {
  var now = new Date();
  var dif = joy - now;
  var day = Math.floor(dif / (1000 * 60 * 60 * 24));
  var hour = Math.floor(dif % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var min = Math.floor(dif % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60));
  var sec = Math.floor(dif % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000);

  if (day < 10) {
    days.textContent = "0".concat(day);
  } else {
    days.textContent = day;
  }

  if (hour < 10) {
    hours.textContent = "0".concat(hour);
  } else {
    hours.textContent = hour;
  }

  if (min < 10) {
    minutes.textContent = "0".concat(min);
  } else {
    minutes.textContent = min;
  }

  if (sec < 10) {
    seconds.textContent = "0".concat(sec);
  } else {
    seconds.textContent = sec;
  }

  if (day == 0 && hour == 0 && min == 0 && sec == 0) {
    clearInterval(counter);
  }
}, 1000); // colurs box

var colurs = document.querySelector(".colurs");

colurs.onclick = function () {
  colurs.classList.toggle("open");
};

var colur = document.querySelectorAll(".colurs .colur");
colur.forEach(function (col) {
  col.addEventListener("click", function (e) {
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    localStorage.setItem('main-color', e.target.dataset.color);
  });
});
var mainColor = localStorage.getItem("main-color");

if (mainColor !== null) {
  document.documentElement.style.setProperty('--main-color', localStorage.getItem("main-color"));
} // backgrounds


var group = document.querySelector(".group");
var backs = ["/imgs/b1.jpg", "/imgs/b2.jpg", "/imgs/b3.jpg", "/imgs/b4.jpg", "/imgs/b5.jpg", "/imgs/b6.jpg"];
var landing = document.querySelector(".landing");
var RandomBacks;
var random;
var backVal = "yes";
var backLocal = localStorage.getItem("backVal");

if (backLocal !== null) {
  backVal = localStorage.getItem("backVal");
}

var back = function back() {
  if (backVal === "yes") {
    RandomBacks = setInterval(function () {
      random = Math.floor(Math.random() * backs.length);
      landing.style.backgroundImage = "url(".concat(backs[random], ")");
      group.style.display = "none";
    }, 2000);
  } else {
    landing.style.backgroundImage = "url(".concat(backs[localStorage.getItem("backgroundInd")], ")");
    group.style.display = "flex";
  }
};

back();
var yes = document.querySelector(".yes");
var no = document.querySelector(".no");

no.onclick = function () {
  backVal = "no";
  clearInterval(RandomBacks);
  localStorage.setItem("backVal", "no");
  localStorage.setItem("backgroundInd", random);
  group.style.display = "flex";
};

yes.onclick = function () {
  backVal = "yes";
  back();
  localStorage.setItem("backVal", "yes");
  group.style.display = "none";
};

var backImg = document.querySelectorAll(".group img");
backImg.forEach(function (img) {
  img.onclick = function (e) {
    landing.style.backgroundImage = "url(".concat(backs[e.target.dataset.num], ")");
    localStorage.setItem("backgroundInd", e.target.dataset.num);
  };
}); // gallery

var photo = document.querySelectorAll(".album .photo");
photo.forEach(function (img) {
  img.onclick = function (e) {
    var blackness = document.createElement("div");
    blackness.classList.add("blackness");
    var whiteness = document.createElement("div");
    whiteness.classList.add("whiteness");
    var h2 = document.createElement("h2");
    var text = document.createTextNode("Image ".concat(img.dataset.img));
    h2.appendChild(text);
    var image = document.createElement("img");
    image.src = img.firstElementChild.src;
    var close = document.createElement("span");
    close.appendChild(document.createTextNode("X"));
    whiteness.appendChild(h2);
    whiteness.appendChild(image);
    whiteness.appendChild(close);
    blackness.appendChild(whiteness);
    document.body.appendChild(blackness);
    var exit = document.querySelector(".whiteness span");
    exit.addEventListener("click", function () {
      blackness.remove();
    });
  };
});
var luffy = document.querySelector(".landing .container img");
luffy.addEventListener("click", function (e) {
  window.scrollTo(0, document.querySelector(e.target.alt).offsetTop);
});
var liked = false;
liked = !liked;
console.log(liked);