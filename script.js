
var gotopBtn = document.getElementById('gotop-btn');
var barsIcon = document.getElementById('bars-icon');
var responsiveMenu = document.getElementById('main-nav--responsive');
// console.log(gotopBtn, 'gotop btn')
// console.log(barsIcon, 'bars icon');
// console.log(responsiveMenu, 'menu responsive');

function removeResponsiveMenu() {
    responsiveMenu.style.transition = '2s';
    responsiveMenu.style.transform = 'translateX(-200px)';  
}


// gestion du bouton de retour vers haut de page
window.onscroll = ( _ => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        gotopBtn.style.display = 'block';
    }
})

gotopBtn.onclick = ( _ => {
    gotopBtn.style.display = 'none';
});

// gestion du menu responsive
barsIcon.onclick = ( _ => {
    if (responsiveMenu.style.transform !== 'translateX(0px)') {
        // barsIcon.classList.remove('fa-bars');
        // barsIcon.classList.add('fa-arrow-left');
        responsiveMenu.style.transform = 'translateX(0px)';  
    } else {
        // barsIcon.classList.add('fa-bars');
        // barsIcon.classList.remove('fa-arrow-left');
        removeResponsiveMenu();
    }
});

responsiveMenu.onclick = ( _ => {
    removeResponsiveMenu();
});

