let toggle = document.querySelector('.menu');
let upper_screen = document.querySelector('.upperscreen');
let main = document.querySelector('.main');
let menu = document.querySelector('.menuscreen'); 
let menu_text = document.querySelectorAll('.nav-col-divs p');
let flag = true;
let nav_col_divs = document.querySelectorAll('.nav-col-divs');
let cursor = document.querySelector('.cursor');
let video_cursor = document.querySelector('.cursor_video');
let section1 = document.querySelector('.section-1');
let services = document.querySelectorAll('.service-div');
let playground =  document.querySelector('.section-4 .large-text');
let section_5 = document.querySelectorAll('.section-5-div');
let pictureNames = ['MATERA','CHANCE','SILVR','INTRAMUROS'];


toggle.addEventListener('click', () => {
    if(flag){
        setTimeout(() => {
            upper_screen.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)';
            upper_screen.style.pointerEvents = 'auto';
             main.style.pointerEvents = 'none';
            main.style.transform = 'translate(300px, -100px) rotate(10deg) scale(1.5, 1.5)';
            main.style.opacity = '0';
        }, 300);
        setTimeout(() => {
            menu.style.transform = 'translate(0px, 0px) rotate(0deg) scale(1, 1)';
            menu.style.opacity = '1';
            menu.style.pointerEvents = 'auto';
        }, 600);
        let time =  1000;
        menu_text.forEach((text) => {
            setTimeout(() => {
                text.style.transform = 'translateY(0rem)';
            }, time);
            time += 100;
        });
        
        flag = false;
    }
    else{
        setTimeout(() => {
            upper_screen.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';
            upper_screen.style.pointerEvents = 'none';
            menu.style.transform = 'translate(-300px, -100px) rotate(-10deg) scale(1.5, 1.5)';
            menu.style.opacity = '0';
            menu.style.pointerEvents = 'none';
        }, 300);

        setTimeout(() => {
            main.style.pointerEvents = 'auto';
            main.style.transform = 'translate(0px,0px) rotate(0deg) scale(1, 1)';
            main.style.opacity = '1';
            flag = true;
        }, 500);

        setTimeout(() => {
            menu_text.forEach((text) => {
                text.style.transform = 'translateY(9rem)';
            });
        }, 1000);
    }
});



nav_col_divs.forEach((div) => {
    let video = div.querySelector('video');
    div.addEventListener('mouseenter', () => {
        video.style.width = '10rem';
    });
    div.addEventListener('mouseleave', () => {
        video.style.width = '0px';
    });
});



section1.addEventListener('mouseenter', () => {
    cursor.style.visibility = 'hidden';  
});

section1.addEventListener('mouseleave', () => {
    cursor.style.visibility = 'visible';  
});

document.addEventListener('mousemove', (e) => {
    video_cursor.style.visibility = 'visible';  
    video_cursor.style.transform = `translate(${e.clientX+30}px,${e.clientY+30}px)`;
    cursor.style.transform = `translate(${e.clientX+20}px,${e.clientY+20}px) rotate(-10deg)`;
});


playground.addEventListener('mouseenter', () => {
    cursor.textContent = "PORTFOLIO";
    cursor.style.color = 'white';
    cursor.style.borderRadius = '10px';
});
playground.addEventListener('mouseleave', () => {
    cursor.textContent = "";
    cursor.style.borderRadius = '50px';
});


section_5.forEach((div,index) => {
    let video = div.querySelector('video');
    div.addEventListener('mouseenter', () => {
        cursor.textContent = `${pictureNames[index]}`;
        cursor.style.color = 'white';
        cursor.style.borderRadius = '10px';
        video.play();
    });
    div.addEventListener('mouseleave', () => {
        cursor.textContent = "";
        cursor.style.borderRadius = '50px';
        video.pause();
        video.currentTime = 0;
    });
});



services.forEach((div,index)=>{

    let service_video = div.querySelector('video');
    let small_service_text = div.querySelector('.service-small-text')
    let service_text = div.querySelector('.service-text');
    div.addEventListener('mouseenter',()=>{
        service_video.style.transition = 'height 0.4s';
        service_video.style.opacity = '1';
        service_video.style.height = '262.5px';
        service_text.style.zIndex = '11';
        small_service_text.style.opacity = '1';
        
        services.forEach((otherDiv) => {
            if(otherDiv !== div) {
                otherDiv.querySelector('.service-text').style.opacity = '0.5';
            }
        });
    })
    div.addEventListener('mouseleave',()=>{
        service_video.style.transition = 'height 0';
        service_video.style.height = '0px';
        service_video.style.opacity = '0';
        service_text.style.zIndex = '9';
        small_service_text.style.opacity = '0';

        services.forEach((otherDiv) => {
            otherDiv.querySelector('.service-text').style.opacity = '1';
        });
    })
})