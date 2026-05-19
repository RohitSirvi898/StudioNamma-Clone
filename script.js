let toggle = document.querySelector('.menu');
let upper_screen = document.querySelector('.upper-screen');
let main = document.querySelector('main');

toggle.addEventListener('click', () => {
    if(upper_screen.style.top == '-200vh') {
        upper_screen.style.transform = 'rotate(20deg)';
        upper_screen.style.top='0%';
        main.style.visibility = 'hidden';
        toggle.textContent = "CLOSE";
        
    } else {
        upper_screen.style.transform = 'rotate(0deg)';
        upper_screen.style.top = '-200vh';
        main.style.visibility = 'visible';
        toggle.textContent = "OPEN";
    }
});

let cursor = document.querySelector('.cursor');
let video_cursor = document.querySelector('.cursor_video');
let section1 = document.querySelector('.section-1');

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

let playground =  document.querySelector('.section-4 .large-text');
playground.addEventListener('mouseenter', () => {
    cursor.textContent = "PORTFOLIO";
    cursor.style.color = 'white';
    cursor.style.borderRadius = '10px';
});
playground.addEventListener('mouseleave', () => {
    cursor.textContent = "";
    cursor.style.borderRadius = '50px';
});

let section_5 = document.querySelectorAll('.section-5-div');
let pictureNames = ['MATERA','CHANCE','SILVR','INTRAMUROS'];
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