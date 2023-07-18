// Show Menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    if(toggle && nav){
        toggle.addEventListener('click',() =>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav_toggle', 'nav_menu');

// active or remove active

const navLink = document.querySelectorAll('.nav_link');
navLink.forEach(n => n.classList.remove('active'));

function toggleActive(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show');
}

navLink.forEach( n => n.addEventListener('click',toggleActive));

// const sendMail = (e) => {
//     e.preventDefault()
//     const msg = document.getElementById('message')
//     const email = document.getElementById('email')
    
//     Email.send({
//         SecureToken : "dc5312c3-8410-4343-94b1-42523c63115d",
//         To : "jagdishkannan0@gmail.com",
//         From : "jagdishkannan0@gmail.com",
//         Subject : "PortFolio",
//         Body : email.value +"  "+ msg.value,
//     }).then(
//       message => alert(message)
//     );
// }

// const form = document.querySelector('.contact_form')
// form.addEventListener('submit',sendMail)

