document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("dice-form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const numOfDice = document.getElementById("number-of-dice").value
        const outError = document.getElementById("error-para")
        if(numOfDice === "" || numOfDice < 1){
            outError.innerHTML = "Please enter a positive integer."
        } else {
            outError.innerHTML = "&nbsp;"
            const dices = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"]
            let diceImage = ""
            let diceSum = 0
            for(let i = 0; i < numOfDice; i++){
                const n = Math.floor(Math.random() * 6) + 1
                diceImage += dices[n-1]
                diceSum += n
            }
            const outDiceImage = document.getElementById("dice-para")
            const outDiceSum = document.getElementById("sum-para")
            const lastSum = outDiceSum.textContent.split(" ")[2]
            if(lastSum){
                const ul = document.getElementById("ul")
                const li = document.createElement("li")
                li.innerHTML = `${outDiceImage.innerHTML}=${lastSum}`
                ul.appendChild(li)
            }
            outDiceImage.innerHTML = diceImage
            outDiceSum.textContent = `Sum = ${diceSum}`
        }
    })
})