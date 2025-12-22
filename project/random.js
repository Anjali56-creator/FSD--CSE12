const quotes=["Discipline beats motivation when motivation goes on vacation.",
"Dreams don’t work unless you do.",
"Success is not for the lazy.",
"Great things never come from comfort zones.",
"If it was easy, everyone would do it.",
"Push yourself, because no one else is going to do it for you.",
"Sometimes later becomes never. Do it now.","Little things make big days.", "Don’t wait for opportunity. Create it.","Don’t watch the clock; do what it does. Keep going.",
"A year from now you may wish you had started today.",
"The harder you work for something, the greater you’ll feel when you achieve it.",
"Dream bigger. Do bigger.",
"Don’t stop when you’re tired. Stop when you’re done.",
"Wake up with determination. Go to bed with satisfaction.",
"Do something today that your future self will thank you for.",
"It’s going to be hard, but hard does not mean impossible.",
"Don’t limit your challenges. Challenge your limits.",
"Great things never come from comfort zones.",
"Push yourself, because no one else is going to do it for you.",
"Success doesn’t just find you. You have to go out and get it.",
"Success is not for the lazy.",
"The harder you work for something, the greater you’ll feel when you achieve it.",
"Dream bigger. Do bigger.",
"Don’t stop when you’re tired. Stop when you’re done.",
"Wake up with determination. Go to bed with satisfaction.",
"Do something today that your future self will thank you for.",
"It’s going to be hard, but hard does not mean impossible.",
"Don’t limit your challenges. Challenge your limits.","My brain has too many tabs open.",
"I plan. Life laughs."];

const button=document.querySelector("button");
const quote=document.querySelector("h1");

button.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*quotes.length);
    quote.textContent=quotes[index];
})

