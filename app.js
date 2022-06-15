const ham = document.querySelector('.hamburger')
const sideNav = document.querySelector('.side-nav')

ham.addEventListener('click', () => {
    console.log('working')
    sideNav.classList.toggle('active')
})

// side nav -> user
const userNav = document.querySelector('.user-nav')
const team = document.querySelector('.teams')
const body = document.querySelector('.body')

console.log(userNav);
console.log(team);
userNav.addEventListener('click', () => {
    console.log('work-ing')
    team.classList.toggle('active-team')
    // body.classList.toggle('bg')
})


// Full Screen
const fullScreen = document.querySelector('.full-screen')
// const exitFullScreen = document.querySelector('.exit-full-screen')
fullScreen.addEventListener('click', () => {
    document.documentElement.requestFullscreen();
    // fullScreen.classList.toggle('exit-full-screen')
})

// exitFullScreen.addEventListener('click', () => {
//     documenet.exitFullscreen();
//     exitFullScreen.classList.toggle('full-screen')
// })

