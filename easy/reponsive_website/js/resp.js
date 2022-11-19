burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
burger.addEventListener('click', () => {
    rightNav.classList.toggle("v-class-resp")
    navList.classList.toggle("v-class-resp")
    navbar.classList.toggle("h-nav-resp")
})


// Scroll Animations
observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach(element => {
    observer.observe(element)
});