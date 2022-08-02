let who = ['My dog', 'My grandma', 'My cat', 'A car'];
let action = ['ate', 'pissed', 'crushed', 'broked'];
let time = ['before the class', 'during my lunch', 'riding in the car', 'while drinking coffee'];

const selectorSentence = (subject) =>{
    let num = Math.floor(Math.random()*(subject.length))
    return num;
}

const generator = (who, action, time) =>{
    let sentence = `${who[selectorSentence(who)]} ${action[selectorSentence(action)]} my homework ${time[selectorSentence(time)]}`
    let result = sentence.charAt(0).toUpperCase() +  sentence.slice(1)
    
    return result;
}

window.onload = () =>{
    let excuse = document.querySelector("#excuse")
    
    excuse.innerHTML=generator(who, action, time)
}