// window.onscroll = () => {
// toggleTopButton();
// }
// function scrollToTop(){
// window.scrollTo({top: 0, behavior: 'smooth'});
// }

// function toggleTopButton() {
// if (document.body.scrollTop > 20 ||
//     document.documentElement.scrollTop > 20) {
//     document.getElementById('back-to-up').classList.remove('d-none');
// } else {
//     document.getElementById('back-to-up').classList.add('d-none');
// }
// }




document.addEventListener('DOMContentLoaded', function() {
    var backToTopBtn = document.getElementById('backToTopBtn');
    backToTopBtn.style.display = 'none';
    window.onscroll = function() {
        if (document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    };
    backToTopBtn.onclick = function() {
        
        var scrollToTop = window.setInterval(function() {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 40); 
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 5); 
    };
});