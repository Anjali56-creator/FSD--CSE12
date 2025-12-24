const zodiacSigns=[
    "aries","taurus","gemini","cancer","leo","virgo","libra","scorpio","sagittarius","capricorn","aquarius","pisces"
];

const compliments=[
    "You are amazing!",
    "You have a great sense of humor!",
    "You are a true friend!",
    "You are very talented!",
    "You have a kind heart!",
    "You are very creative!",
    "You have a great smile!",
    "You are very intelligent!",
    "You are very hardworking!",
    "You are very thoughtful!","you are very adventurous!","You are very optimistic!",
    "You are very reliable!","You are very generous!",
    "You are very patient!"," You are very courageous!"," You are very passionate!"," You are very empathetic!",
    " You are very organized!"," You are very charismatic!"," You are very resourceful!"," You are very ambitious!",
    "You are very charismatic!",
  "You are very resourceful!",
  "You are very ambitious!",
  "You inspire people around you!",
  "You bring positive energy!",
  "You handle challenges gracefully!",
  "You are emotionally strong!",
  "You are naturally confident!",
  "You make people feel valued!",
  "You never stop growing!",
  "You are wiser than you think!",
  "You have a beautiful mindset!"
];
const victimCardCompliments = [
  "You give more than you receive.",
  "People often misunderstand your intentions.",
  "You stay strong even when life feels unfair.",
  "You hide your pain behind a smile.",
  "You’ve been patient for far too long.",
  "You deserve more appreciation than you get.",
  "You often put others before yourself.",
  "You carry emotional weight silently.",
  "You stay kind even after being hurt.",
  "Life has tested you more than most.",
  "You rarely complain, even when struggling.",
  "You forgive easily, even when you shouldn’t.",
  "You’ve been holding yourself together alone.",
  "Your efforts often go unnoticed.",
  "You feel deeply but express little.",
  "You’ve survived things people don’t know.",
  "You always show up for others.",
  "You’ve been strong for everyone else.",
  "You keep moving despite emotional exhaustion.",
  "You deserve rest and peace.",
  "You give second chances too easily.",
  "You’ve been carrying quiet battles.",
  "You don’t get the credit you deserve.",
  "You sacrifice without expecting returns.",
  "You are emotionally mature beyond your age.",
  "You stay loyal even when hurt.",
  "You keep hoping despite disappointments.",
  "You deserve gentler days.",
  "You are stronger than your pain.",
  "You rarely ask for help.",
  "You deserve to be chosen too."
];
const recommendations = [
  "Take a short break today.",
  "Trust your intuition more.",
  "Focus on self-care this week.",
  "Drink more water today.",
  "Sleep early tonight.",
  "Avoid overthinking small issues.",
  "Spend time with someone you trust.",
  "Write your thoughts down.",
  "Try something creative today.",
  "Step outside your comfort zone.",
  "Say no when needed.",
  "Prioritize your mental peace.",
  "Listen to calming music.",
  "Reconnect with an old hobby.",
  "Don’t rush important decisions.",
  "Let go of what you can’t control.",
  "Celebrate small wins.",
  "Be kind to yourself.",
  "Avoid unnecessary arguments.",
  "Plan your week ahead.",
  "Limit screen time today.",
  "Focus on one task at a time.",
  "Believe in your process.",
  "Trust the timing of your life.",
  "Speak your truth gently.",
  "Rest without guilt.",
  "Observe more, react less.",
  "Protect your energy.",
  "Spend time in nature.",
  "Practice gratitude today.",
  "Choose peace over proving a point."
];
const predictions = [
  "Good news is coming your way.",
  "A positive change will surprise you.",
  "You will gain clarity soon.",
  "A long wait will finally end.",
  "Someone will appreciate you unexpectedly.",
  "Your efforts will pay off.",
  "A new opportunity is approaching.",
  "Emotional healing is near.",
  "You will feel more confident soon.",
  "A meaningful conversation awaits you.",
  "Luck will favor you this week.",
  "A fresh start is coming.",
  "Your patience will be rewarded.",
  "Financial stability will improve.",
  "A decision will bring peace.",
  "You will let go of old worries.",
  "Your hard work will be noticed.",
  "You will feel lighter emotionally.",
  "An important realization is coming.",
  "Your creativity will flourish.",
  "A connection will grow stronger.",
  "You will overcome a challenge.",
  "Your confidence will increase.",
  "A calm phase is approaching.",
  "You will feel more aligned.",
  "Unexpected happiness is near.",
  "Your mindset will shift positively.",
  "You will gain inner strength.",
  "A supportive person will appear.",
  "Your future looks promising.",
  "Things will fall into place soon."
];
const form=document.getElementById("astroform");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value;
    const surname=document.getElementById("surname").value;
    const day=parseInt(document.getElementById("day").value);
    const month=parseInt(document.getElementById("month").value);
    const year=parseInt(document.getElementById("year").value);

    const text=`Hello ${name} ${surname}!\n
    Here are your astrology insights:\n
    Compliment: ${compliments[Math.floor(Math.random()*compliments.length)]}\n
    Victim Card Compliment: ${victimCardCompliments[Math.floor(Math.random()*victimCardCompliments.length)]}\n
    Recommendation: ${recommendations[Math.floor(Math.random()*recommendations.length)]}\n
    Prediction: ${predictions[Math.floor(Math.random()*predictions.length)]}
    `;
    document.getElementById("result").textContent=text;
});

    
    

    

