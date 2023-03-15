let about = document.querySelector(".about")
let btn = document.querySelectorAll(".tab-btn")
let content = document.querySelectorAll(".content")

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", mobileMenu)

function mobileMenu() {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
}
const navLink = document.querySelectorAll(".nav-link")

navLink.forEach((n) => n.addEventListener("click", closeMenu))

function closeMenu() {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}

const nav = document.querySelector(".header")

window.addEventListener("scroll", function () {
  let navHeight = nav.getBoundingClientRect().height
  let scrollHeight = window.pageYOffset

  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav")
  } else {
    nav.classList.remove("fixed-nav")
  }
})

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id
  if (id) {
    btn.forEach(function (btn) {
      btn.classList.remove("active")
    })
    e.target.classList.add("active")

    content.forEach(function (content) {
      content.classList.remove("active")
    })
    const element = document.getElementById(id)
    element.classList.add("active")
  }
})

const menu = [
  {
    id: 1,
    title: "breakout",
    category: "javascript",
    img: "images/breakout.png",
    desc: `In Breakout, a layer of bricks lines the top third of the screen and the goal is to destroy them all by repeatedly bouncing a ball off a paddle into them. `,
    link: `https://breakout00.netlify.app`,
  },
  {
    id: 2,
    title: "emojitranslater",
    category: "react",
    img: "images/emojitranslater.png",
    desc: `
        EmojiTranslater translates emojis to texts in english language`,
    link: `https://emoji-translater.netlify.app`,
  },
  {
    id: 3,
    title: "Todo",
    category: "javascript",
    img: "images/grocerybud.png",
    desc: `You can create a list and can edit and delete the individual item or whole list. `,
    link: `https://to-do-app00.netlify.app`,
  },
  {
    id: 4,
    title: "memory game",
    category: "javascript",
    img: "images/memorygame.png",
    desc: `It is a simple card game of finding two similar image. It imporves visual recognition `,
    link: `https://memory-game00.netlify.app`,
  },
  {
    id: 5,
    title: "minionspeak",
    category: "javascript",
    img: "images/minionspeak.png",
    desc: `It translate english language to banana language using an API.`,
    link: `https://minion-speak-00.netlify.app`,
  },
  {
    id: 6,
    title: "whac a mole",
    category: "javascript",
    img: "images/wacamole.png",
    desc: `Moles appear randomly in any square. Points are scored by whacking each mole as it appears.`,
    link: `https://wac-a-mole00.netlify.app`,
  },

  {
    id: 1,
    title: "Chat Application",
    category: "react",
    img: "images/chatapp.png",
    desc: ` This is made with the help of react chat engine. Here we can create groups and we can even add our friends. We can also send text and images.`,
    link: `https://chat-application01.netlify.app/`,
  },
]
let sectionCenter = document.querySelector(".projectSection-center")
let btnCointainer = document.querySelector(".projectBtn-container")

window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menu)
  displayMenuBtns()
})

function displayMenuBtns() {
  const categories = menu.reduce(
    function (value, currValue) {
      if (!value.includes(currValue.category)) {
        value.push(currValue.category)
      }
      return value
    },
    ["all"]
  )
  const categoryBtn = categories
    .map(function (category) {
      return ` <button type="button" class="filter-btn" data-id=${category}>${category}</button>`
    })
    .join("")
  btnCointainer.innerHTML = categoryBtn

  let filterbtn = document.querySelectorAll(".filter-btn")

  filterbtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      let category = e.currentTarget.dataset.id
      // console.log(category)
      let displayCategory = menu.filter(function (item) {
        if (item.category === category) {
          return item
        }
      })
      if (category === "all") {
        return displayMenu(menu)
      } else {
        return displayMenu(displayCategory)
      }
    })
  })
}

function displayMenu(menuItems) {
  let display = menuItems
    .map(function (item) {
      return `  <article class="project-item">
        <img src=${item.img} 
            alt=${item.title} class="photo" />
        <div class="project-info">
            <header>
                <h4><a target="_blank" href=${item.link}>${item.title}</a></h4>
               
            </header>
            <p class="project-text">
               ${item.desc}</br>
               
            </p>
        </div>
    </article>`
    })
    .join("")
  sectionCenter.innerHTML = display
}
