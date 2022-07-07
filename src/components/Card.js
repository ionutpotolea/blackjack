import React from "react"

export default function Card(props){
    const {card} = props
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const images = importAll(require.context('../assets/cards', false, /\.(png)$/));

    return (
        <img
                className="playing-card"
                alt="playing-card"
                src={images[`${card.suite}${card.rank}.png`]}
            />
    )
}