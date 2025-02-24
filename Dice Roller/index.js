function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const sumRes = document.getElementById("sumRes")

    const values = [];
    const images = [];

    for(let i = 0; i< numOfDice; i++ ){
            const value = Math.floor(Math.random()*6) + 1;
            values.push(value);
            images.push(`<img src="images/${value}.png"></img>`)
        }
    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ');
    let sum = 0
    for (let val of values){
        sum += val; 
    }
    sumRes.textContent = sum 
}

