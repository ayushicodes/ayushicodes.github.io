let about = document.querySelector('.about')
let btn = document.querySelectorAll('.tab-btn')
let content = document.querySelectorAll('.content')


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




const nav = document.querySelector('.header')

window.addEventListener('scroll', function () {

    let navHeight = nav.getBoundingClientRect().height
    let scrollHeight = window.pageYOffset

    if (scrollHeight > navHeight) {
        nav.classList.add('fixed-nav')
    }
    else {
        nav.classList.remove('fixed-nav')
    }
}
)




about.addEventListener('click', function (e) {
    const id = e.target.dataset.id
    if (id) {
        btn.forEach(function (btn) {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        content.forEach(function (content) {
            content.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')

    }
})

// projects section

const menu = [
    {
        id: 1,
        title: "Emoji Translater",
        category: "react",
        img: "images/emojitranslater.png",
        desc: `I am a emoji translater `,
    },
    {
        id: 2,
        title: "Memory Game",
        category: "javascript",
        price: 20.99,
        img: "images/memorygame.png",
        desc: `I am a memory game `,
    },
    {
        id: 3,
        title: "Minion Speak",
        category: "javascript",
        img: "images/minionspeak.png",
        desc: `I am a minion speak `,
    },
    {
        id: 4,
        title: "Wac a mole",
        category: "javascript",
        img: "images/wacamole.png",
        desc: `I am  wac a mole`,
    },
    {
        id: 5,
        title: "BreakOUT",
        category: "javascript",
        img: "images/breakout.png",
        desc: `I am  breakout`,
    },

];
// get parent element
const sectionCenter = document.querySelector(".Projectsection-center");
const btnContainer = document.querySelector(".projectbtn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class="project-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="project-info">
              <header>
                <h4>${item.title}</h4>
              </header>
              <p class="project-text
              ">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategory);
            }
        });
    });
}
