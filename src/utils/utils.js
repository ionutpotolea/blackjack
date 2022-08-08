const chipColor = (bet) => {
    return bet === 1 ? 'chip-black' :
        bet === 5 ? 'chip-blue' :
        bet === 10 ? 'chip-green' :
        bet === 50 ? 'chip-yellow' :
        bet === 100 ? 'chip-red' : 'chip-gray'
}

const analyzeCards = (cardsArray) => {
    // 1. calculate total
    let foundAces = 0
    let totalSum = 0
    let hasBlackJack = false;

    const cardNums = cardsArray.map(cardItem => {
        if (cardItem.rank === "J") return 10
        if (cardItem.rank === "Q") return 10
        if (cardItem.rank === "K") return 10
        if (cardItem.rank === "A"){foundAces++; return 0}
        else return +cardItem.rank
    }).sort()
    
    const sumWithoutAces = cardNums.reduce((acc, currentValue) => acc + currentValue)
    totalSum += sumWithoutAces

    // option 1: count one ace as 11
    let acesPointsCountOption = foundAces? 11 + foundAces-1 : 0

    if (totalSum <= 21-acesPointsCountOption){
        totalSum += acesPointsCountOption
    } else {
         // option 2: count all aces as 1
        totalSum += foundAces
    }

    // 2. determine if player has BlackJack
    
    if(cardNums.length === 2 &&
        cardNums.includes(10) &&
        cardNums.includes(0)){
        hasBlackJack = true
    }

    return [totalSum, hasBlackJack]
}

const resetState = {
    dealerCards: null,
    dealerCard: null,
    playerCards: null,
    playerCard: null,
    double: false,
    doubleAvailable: true,
    roundEnded: false,
    roundStarted: false,
    winAmount: 0
}

export {chipColor, analyzeCards, resetState, url}