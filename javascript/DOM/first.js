// const a=document.body;
// const root=a.querySelector('.id1');
// const root2=a.querySelector('.id2');
// const root3=a.querySelector('.id3');
// const element=document.createElement('h1');
// element.textContent='Hello, world!';
// element.className='element';
// element.id='first';
// element.style.fontSize='80px';
// root.append(element);
// const element2=document.createElement('h2');
// element2.textContent='Hello, everyone!';
// element2.className='element';
// element2.id='second';
// element2.style.fontSize='60px';
// root2.append(element2);
// const element3=document.createElement('h3');
// element3.textContent='Hello, all!';
// element3.className='element';
// element3.id='third';
// element3.style.fontSize='40px';
// root3.append(element3);
const div1 = document.querySelector(".id1");
const div2 = document.querySelector(".id2");
const div3 = document.querySelector(".id3");

// make divs visible & clickable (since HTML has no content)
[div1, div2, div3].forEach(div => {
    div.style.height = "100px";
    div.style.border = "1px solid white";
    div.style.margin = "10px";
});

// double click event
div1.ondblclick = function () {
    div1.style.color = "pink";
};

