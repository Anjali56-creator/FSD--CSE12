const React={
    createElement:function createElement(tag,attributes,children)
{
    const element=document.createElement(tag);
    element.textContent=children;
    for(const key in attributes)
    {
        element[key]=attributes[key];
    }
    return element;
}
}


const element1=createElement('h1',{className:'element',id:'first',style:'font-size:80px;'},'Hello, world!');
const element2=createElement('h2',{className:'element',id:'first',style:'font-size:80px;'},'Hello, everyone!');

// const element1=document.createElement('h1');
// element1.textContent='Hello, world!';
// element1.className='element';
// element1.id='first';
// element1.style.fontSize='80px';

root.append(element1);
root.append(element2);