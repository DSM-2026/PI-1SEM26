const botaoMenu = document.getElementById('botaoMenu');
    const menuMobile = document.getElementById('menuMobile');
    const icone = botaoMenu.querySelector('i');

    botaoMenu.addEventListener('click', () => {
        menuMobile.classList.toggle('ativo');
        
        if (menuMobile.classList.contains('ativo')) {
            icone.classList.remove('fa-bars');
            icone.classList.add('fa-xmark');
        } else {
            icone.classList.remove('fa-xmark');
            icone.classList.add('fa-bars');
        }
    });