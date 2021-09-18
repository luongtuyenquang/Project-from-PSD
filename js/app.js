function navMobile() {
    const iconOpen = document.querySelector('.icon-open')
    const iconClose = document.querySelector('.icon-close')
    const navList = document.querySelector('.header__menu')
    const header = document.querySelector('.header')
    const wrap = document.querySelector('.wrapper')

    function showNavMobile(){
        navList.classList.add('nav-active')
    }

    function hideNavMobile(){
        navList.classList.remove('nav-active')
        header.classList.remove('playing')
    }

    iconOpen.addEventListener('click', () => {
        showNavMobile()
        header.classList.add('playing')
    })

    iconClose.addEventListener('click', hideNavMobile)
    wrap.addEventListener('click', hideNavMobile)

    function stopEvent(e){
        e.stopPropagation()
    }
    
    iconOpen.addEventListener('click', stopEvent) 
    navList.addEventListener('click', stopEvent)
    header.addEventListener('click', stopEvent)

    function headerScroll(){
        const header = document.querySelector('.container-fluid')
        window.addEventListener('scroll', function(){
            header.classList.toggle('header_scroll', window.scrollY > 0)
        })
    }
    function backTop(){
        const backTop = document.querySelector('.back-top')
        window.addEventListener('scroll', function(){
            backTop.style.display = 'block'
            backTop.classList.toggle('back-top', window.scrollY > 500)
        })
        backTop.addEventListener('click', function(){
            // event.preventDefault();
            $('html,body').animate({scrollTop:0}, "slow");
        })
    }
    headerScroll()
    backTop()
}
navMobile();