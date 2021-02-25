document.addEventListener("DOMContentLoaded", () => {
    let count = 0
    const button = document.getElementById("button")
    button.addEventListener("click", () => {
        const numOfDice = document.getElementById("input").value
        if(numOfDice){
            const diceResult = []
            for(let i = 0; i < numOfDice; i++){
                diceResult.push(Math.floor(Math.random() * 6) + 1)
            }
            const diceSum = diceResult.reduce((a, e) => a + e, 0)
            let diceImage = ""
            for(let i = 0; i < numOfDice; i++){
                switch(diceResult[i]){
                    case 1 : diceImage += "&#9856"; break
                    case 2 : diceImage += "&#9857"; break
                    case 3 : diceImage += "&#9858"; break
                    case 4 : diceImage += "&#9859"; break
                    case 5 : diceImage += "&#9860"; break
                    default: diceImage += "&#9861"
                }
            }
            const outDiceImage = document.getElementById("dice-para")
            const outDiceSum = document.getElementById("sum-para")
            if(++count > 1){
                const ul = document.getElementById("ul")
                const li = document.createElement("li")
                li.innerHTML = `${outDiceImage.innerHTML}=${outDiceSum.textContent.split(" ")[2]}`
                ul.appendChild(li)
            }
            outDiceImage.innerHTML = diceImage
            outDiceSum.textContent = `Sum = ${diceSum}`
        }
    })
})