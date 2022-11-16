document.querySelectorAll(".nav-link").forEach((link) => {
    //console.log(link.href, window.location.href)
    if(window.location.href === link.href){
        link.setAttribute('aria-current', 'page')
    }
})