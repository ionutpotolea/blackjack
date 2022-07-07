const chipColor = (bet) => {
    return bet === 1 ? 'chip-black' :
        bet === 5 ? 'chip-blue' :
        bet === 10 ? 'chip-green' :
        bet === 50 ? 'chip-yellow' :
        bet === 100 ? 'chip-red' : 'chip-gray'
}

const calculateCardsSum = (cardsArray) => {
    let foundAces = 0
    let totalSum = 0
    const cardNums = cardsArray.map(cardItem => {
        if (cardItem.rank === "J") return 10
        if (cardItem.rank === "Q") return 10
        if (cardItem.rank === "K") return 10
        if (cardItem.rank === "A"){foundAces++; return 0}
        else return +cardItem.rank
    }).sort()
    
    const sumWithoutAces = cardNums.reduce((acc, currentValue) => acc + currentValue)

    totalSum += sumWithoutAces

    // add aces to total
    for (let i = 0; i<foundAces; i++){
        if (totalSum+11>21){
            totalSum += 1
        } else {
            totalSum += 11
        }
    }
    return totalSum
}

export {chipColor, calculateCardsSum}