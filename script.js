var gotopBtn = document.getElementById('gotop-btn');
// console.log(gotopBtn, 'gotop btn')

// gestion du bouton de retour vers haut de page
window.onscroll = ( _ => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        gotopBtn.style.display = 'block';
    }
})

gotopBtn.onclick = ( _ => {
    gotopBtn.style.display = 'none';
});

