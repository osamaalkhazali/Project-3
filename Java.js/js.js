let skills = document.querySelectorAll(".range span")
let our = document.querySelector("#ourskills")

let up = document.querySelector(".up")

// Stats


// let money = document.querySelector(".money")
// let countries = document.querySelector(".countries")
// let projects = document.querySelector(".projects")
// let clients = document.querySelector(".clients")
let stat = document.querySelectorAll(".stat span")
let stats= document.querySelector("#stats")


window.onscroll = function () {

// stats
    
if (window.scrollY >= stats.offsetTop - 500 ) {
    stat.forEach((span) => {
        let goal = span.dataset.to
        let tostat = setInterval(() => {
            if (span.textContent === goal) {
                clearInterval(tostat)
            } else {
            span.textContent++
            }
            
    },10)
        // span.textContent = span.dataset.to
    })
}



    // Skills
    if (window.scrollY >= our.offsetTop ) {
        skills.forEach((span) => {
            span.style.width = span.dataset.status
        })
    }


    // Up
    if (window.scrollY > 200) {
                up.classList.add("show")
            } else if (window.scrollY < 200) {
                up.classList.remove("show")
            }

}

up.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    
}


// Scroller

window.addEventListener("load", () => { 
    let scroll = document.querySelector(".scroll")
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight


    window.addEventListener("scroll", () => {
        const scrolltop = document.documentElement.scrollTop
        scroll.style.width = `${(scrolltop / height) * 100}%`;
    })
})


// Event

let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")


let joy = new Date("aug 6 2023")
joy.setHours(5)

let counter = setInterval(() => {
    let now = new Date()
    let dif = joy - now
    let day = Math.floor(dif / (1000 * 60 * 60 * 24))
    let hour = Math.floor((dif % (1000 * 60 * 60 *24)) / (1000 * 60 * 60))
    let min = Math.floor((dif % (1000 * 60 * 60 *24)) % (1000 * 60 * 60 ) / (1000 * 60 ))
    let sec = Math.floor((dif % (1000 * 60 * 60 *24)) % (1000 * 60 * 60 ) % (1000 * 60 ) / 1000)
    

    if (day < 10) {
        days.textContent = `0${day}`
    } else {
        days.textContent = day
    }
    if (hour < 10) {
        hours.textContent = `0${hour}`
    } else {
        hours.textContent = hour
    }
    if (min < 10) {
        minutes.textContent = `0${min}`
    } else {
        minutes.textContent = min
    }
    if (sec < 10) {
        seconds.textContent = `0${sec}`
    } else {
        seconds.textContent = sec
    }

    if (day == 0 && hour == 0 && min == 0 && sec == 0) {
        clearInterval(counter)
    }

}, 1000)



// colurs box

let colurs = document.querySelector(".colurs")
colurs.onclick = () => {
    colurs.classList.toggle("open")
}


let colur = document.querySelectorAll(".colurs .colur")

colur.forEach(col => {
    col.addEventListener("click" , (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        localStorage.setItem('main-color',e.target.dataset.color )
    })
})

let mainColor = localStorage.getItem("main-color")
if (mainColor !== null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("main-color"))

}

// backgrounds

let group= document.querySelector(".group")
let backs = ["/imgs/b1.jpg","/imgs/b2.jpg","/imgs/b3.jpg","/imgs/b4.jpg","/imgs/b5.jpg","/imgs/b6.jpg",]
let landing = document.querySelector(".landing")
let RandomBacks
let random
let backVal = "yes"
let backLocal = localStorage.getItem("backVal")
if (backLocal !== null) {
    backVal = localStorage.getItem("backVal")
}
let back = () => {
    if (backVal === "yes") {
        RandomBacks = setInterval(() => { 
            random = Math.floor(Math.random()*backs.length)
            landing.style.backgroundImage = `url(${backs[random]})`
            group.style.display ="none"
        }, 2000) 
    } else {
        landing.style.backgroundImage = `url(${backs[localStorage.getItem("backgroundInd")]})`
        group.style.display ="flex"
    }
}
back();
let yes = document.querySelector(".yes")
let no = document.querySelector(".no")
no.onclick = () => {
    backVal = "no"
    clearInterval(RandomBacks)
    localStorage.setItem("backVal", "no")
    localStorage.setItem("backgroundInd", random)
    group.style.display ="flex"
}
yes.onclick = () => {
    backVal = "yes"
    back();
    localStorage.setItem("backVal", "yes")
    group.style.display ="none"
}
let backImg = document.querySelectorAll(".group img")
backImg.forEach((img) => {
    img.onclick = (e) => {
        landing.style.backgroundImage = `url(${backs[e.target.dataset.num]})`
        localStorage.setItem("backgroundInd", e.target.dataset.num)
    }
})

// gallery

let photo = document.querySelectorAll(".album .photo")
photo.forEach((img) => {
    img.onclick = (e) => {
        let blackness = document.createElement("div")
        blackness.classList.add("blackness")
        let whiteness = document.createElement("div")
        whiteness.classList.add("whiteness")
        let h2 = document.createElement("h2")
        let text = document.createTextNode(`Image ${img.dataset.img}`)
        h2.appendChild(text)
        let image = document.createElement("img")
        image.src = img.firstElementChild.src
        let close = document.createElement("span")
        close.appendChild(document.createTextNode("X"))
        whiteness.appendChild(h2)
        whiteness.appendChild(image)
        whiteness.appendChild(close)
        blackness.appendChild(whiteness)
        document.body.appendChild(blackness)
        let exit = document.querySelector(".whiteness span")
        exit.addEventListener("click", () => {
            blackness.remove()
            })
    }
})




let luffy = document.querySelector(".landing .container img")
luffy.addEventListener("click", (e) => {
    window.scrollTo(0,document.querySelector(e.target.alt).offsetTop) 
})




let liked = false;
liked =! liked ;
console.log(liked)


