const form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name1=document.getElementById("name1").value;
    const name2=document.getElementById("name2").value;
    const l1=name1.length;
    const l2=name2.length;const result=Math.pow(l1+l2,3)%101;
    document.querySelector('h2').textContent=`Result: ${result}%`;
    form.reset();
})