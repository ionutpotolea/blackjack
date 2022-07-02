const chipColor = (bet) => {
    return bet === 1 ? 'chip-black' :
        bet === 5 ? 'chip-blue' :
        bet === 10 ? 'chip-green' :
        bet === 50 ? 'chip-yellow' :
        bet === 100 ? 'chip-red' : 'chip-gray'
}

export {chipColor}