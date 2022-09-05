window.addEventListener('mousemove', (e) => {
    let posX = e.clientX;
    let posY = e.clientY;
    
    const mouse = document.querySelector('.point');

    mouse.style.left = posX + "px";
    mouse.style.top = posY + "px";
});
