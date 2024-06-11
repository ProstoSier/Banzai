/*----show-content-----------------*/

const showBtn = document.querySelector('#show');
const showContent = document.querySelector('#content-block');

showBtn.addEventListener('click', () => {
    if(showContent.style.display === 'none' || showContent.style.display === '') {
        showContent.style.display = 'block';
        showBtn.innerHTML = 'Hide';
    } else {
        showContent.style.display = 'none';
        showBtn.innerHTML = 'Show';
    }
});

/*---accordion---------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionContent = header.nextElementSibling;
            
            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null;
            } else {
                document.querySelectorAll('.accordion-content').forEach(content => {
                    content.style.maxHeight = null;
                });
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; 
            }
        });
    });
});


/*---------burger------------------------------*/

const menuBurger = document.querySelector('.menu-burger');
if (menuBurger) {
    const menuBody = document.querySelector('.menu-burger__body')
    const menuContent = document.querySelector('.menu-burger__content')
    menuBurger.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock');
        menuBurger.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuContent.classList.toggle('_active');
    })
}

