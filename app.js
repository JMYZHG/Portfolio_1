// RESUME BUTTON
function openResume() {
    
    const pdfFile = 'images/Resume.pdf';

    // Open the PDF file in a new tab
    window.open(pdfFile, '_blank');
}


const images = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 .5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        
    })

})

images.forEach(image => {
    observer.observe(image)
})


