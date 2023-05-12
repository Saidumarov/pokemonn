

let btn = document.querySelector("#btn");
let section = document.querySelector(".pokomen");
let input = document.querySelector("#input");
let btnn = document.querySelector("#btnn");
let btnn1 = document.querySelector("#btnn1");
let btnn2 = document.querySelector("#btnn2");
let tan = document.querySelector("#tanla");
 let h1 = document.querySelector(".h11");

const menu = [
    {
        id: 1,
        title: "Buttermilk pancakes",
        category: "breakfast",
        price: "15.99$",
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Diner double",
        category: "lunch",
        price: "13.99$",
        img: "./images/item-2.jpeg",
        desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
    },
    {
        id: 3,
        title: "Godzilla milkshake",
        category: "shakes",
        price: "6.99$",
        img: "./images/item-3.jpeg",
        desc: `Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Country delight",
        category: "breakfast",
        price: "20.99$",
        img: "./images/item-4.jpeg",
        desc: ` Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut`,
    },
    {
        id: 5,
        title: "Egg attack",
        category: "lunch",
        price: "22.99$",
        img: "./images/item-5.jpeg",
        desc: ` Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Oreo dream",
        category: "shakes",
        price: "18.99$",
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 9,
        title: "Quarantine buddy",
        category: "shakes",
        price: "16.99$",
        img: "./images/item-9.jpeg",
        desc: ` Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 7,
        title: "Bacon overflow",
        category: "breakfast",
        price: "8.99$",
        img: "./images/item-7.jpeg",
        desc: `Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
    },
    {
        id: 8,
        title: "American classic",
        category: "lunch",
        price: "12.99$",
        img: "./images/item-8.jpeg",
        desc: `On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
    },
    {
        id: 10,
    }

];

btn.addEventListener("click", (e) => {
    e.preventDefault()
    let ui = ""
    const inputvalu = input.value
    menu.map(itme => {
        if (inputvalu === itme.category) {

            ui += `
                <div class="counten">
            <article class = "menu-itme">
            <img src = "${itme.img}" alt = "${itme.title}" class="photo">
            <header>
                <h3>${itme.title}</h4>
                <h4 class = "h44">${itme.category}</h3>
                 <h4 class = "price">${itme.price}</h4>
            </header>

                 <p class = "item-text">

                 ${itme.desc}
                 </p>
                 
                 </article>
                 </div>
                 `


        } 
        section.innerHTML = ui

    });

if (inputvalu === "shakes") {
   document.querySelector(".h11").textContent = ""
} else if (inputvalu === "lunch") {
   document.querySelector(".h11").textContent = ""
    
}else if (inputvalu === "breakfast") {
    document.querySelector(".h11").textContent = ""
     
 } else {
    document.querySelector(".h11").textContent = "Kechirasiz bunday taom topilmadi"
    document.querySelector(".h11").style.opacity = "1"   

 }
restform()

});

const restform = () => {
input.value = ""
}


// tugma 1
btnn.addEventListener("click" , () =>{
    let ui = ""

    const bek = btnn.category =  "shakes"; 
    menu.map(itme =>{
        if (bek === itme.category) {
            ui += `
            <div class="counten">
        <article class = "menu-itme">
        <img src = "${itme.img}" alt = "${itme.title}" class="photo">
        <header>
            <h3>${itme.title}</h4>
            <h4 class = "h44">${itme.category}</h3>
             <h4 class = "price">${itme.price}</h4>
        </header>

             <p class = "item-text">

             ${itme.desc}
             </p>
             
             </article>
             </div>
             `
          
        }
        section.innerHTML = ui
    })
    document.querySelector(".h11").style.opacity = "-1"   
})

// tugma 2


btnn1.addEventListener("click" , () =>{
    let ui = ""

    const bek = btnn.category =  "breakfast";
    menu.map(itme =>{
        if (bek === itme.category) {
            ui += `
            <div class="counten">
        <article class = "menu-itme">
        <img src = "${itme.img}" alt = "${itme.title}" class="photo">
        <header>
            <h3>${itme.title}</h4>
            <h4 class = "h44">${itme.category}</h3>
             <h4 class = "price">${itme.price}</h4>
        </header>

             <p class = "item-text">

             ${itme.desc}
             </p>
             
             </article>
             </div>
             `
          
        }
        section.innerHTML = ui
    })
    document.querySelector(".h11").style.opacity = "-1"   

})


// tugma 3


btnn2.addEventListener("click" , () =>{
    let ui = ""
    const bek = btnn.category =  "lunch"; 
    menu.map(itme =>{
        if (bek === itme.category) {
            ui += `
            <div class="counten">
        <article class = "menu-itme">
        <img src = "${itme.img}" alt = "${itme.title}" class="photo">
        <header>
            <h3>${itme.title}</h4>
            <h4 class = "h44">${itme.category}</h3>
             <h4 class = "price">${itme.price}</h4>
        </header>

             <p class = "item-text">

             ${itme.desc}
             </p>
             
             </article>
             </div>
             `
          
        }
        section.innerHTML = ui
    })
    document.querySelector(".h11").style.opacity = "-1"   

})

// slect 
tan.value = ""
tan.addEventListener("click", () => {
    let ui = ""
    const inputvalu = tan.value
    menu.map(itme => {
        if (inputvalu === itme.category) {

            ui += `
                <div class="counten">
            <article class = "menu-itme">
            <img src = "${itme.img}" alt = "${itme.title}" class="photo">
            <header>
                <h3>${itme.title}</h4>
                <h4 class = "h44">${itme.category}</h3>
                 <h4 class = "price">${itme.price}</h4>
            </header>

                 <p class = "item-text">

                 ${itme.desc}
                 </p>
                 
                 </article>
                 </div>
                 `


        } 
        section.innerHTML = ui

    })
    document.querySelector(".h11").style.opacity = "-1"   

});

