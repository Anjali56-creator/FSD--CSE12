const body=document.querySelector("body");
body.addEventListener('click',(e)=>{
    console.log(e.clientX,e.clientY);

    const circle = document.createElement("div");
    circle.classList.add('circle');
    circle.textContent='Merry Christmas';
    const color=['#e93911ff','#33ff57','#0b1c6bff','#f333ff','#33fff5','#f3ff33','#763c2fff'];
    circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
    circle.style.left=`${e.clientX-25}px`;
    circle.style.top=`${e.clientY-25}px`;
    body.append(circle);
    setTimeout(()=>{
        circle.remove();
    },5000);

})