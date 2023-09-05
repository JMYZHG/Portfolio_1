const observe = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Once its in view, add animation style
        if(entry.intersectionRatio > 0) {
            entry.target.getElementsByClassName.animation = `anim1 2s forwards ease-out`;
        } else {
            entry.target.style.animation = 'none';
        }
    })
})

images.forEach(image => {
    observer.observe(image)
})

