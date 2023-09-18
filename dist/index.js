//Mobile menu
menu = (e) => {
    let selectMenu = document.querySelector('#mobile-menu');
    e.name === 'menu' ? (e.name = 'close', selectMenu.style.opacity = 100) : (e.name = 'menu', selectMenu.style.opacity = 0)
}




//Navigation
toHome = () => {
    document.getElementById('Home').scrollIntoView({behavior:"smooth"})
}
toTestimonials = () => {
    document.getElementById('Testimonials').scrollIntoView({behavior:"smooth"})
}
toPrice = () => {
    document.getElementById('Price').scrollIntoView({behavior:"smooth"})
}
toProjects = () => {
    document.getElementById('Projects').scrollIntoView({behavior:"smooth"})
}




//Darkmode
toggleMode = (e) => {
    const selectToggle = document.querySelector('#toggleDark')
    e.name === 'moon' ? (e.name = 'sunny', selectToggle.classList.add('dark')) : (e.name = 'moon', selectToggle.classList.remove('dark'))
}



//Link validation
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    const formData = new FormData(form);
    e.preventDefault();
    let object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    })
})
let json = JSON.stringify(object);

fetch("https://api.web3forms.com/submit", {
    method: 'POST',
    headers: {
        "Content-Type":"application/json",
        Accept:"application/json",
    },
    body:json
})
.then(async (response) => {
    let json = await response.json();
    if (response.status == 200){
        console.log("success")
    } else {
        console.log(response)
    }
})