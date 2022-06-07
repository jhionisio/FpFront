import React from 'react'
import CardBody from './CardBody'
import '../css/_card.css'

const Card = ({swCharacters}: any) => {

    let classNames = swCharacters.length > 3 ? "cardContainer": "cardContainerSecond"

    return (
        <div className={classNames}>
            {swCharacters.map((character: { id: React.Key | null | undefined }) => {
                return <CardBody key={character.id} character={character} classNames={classNames}/>
            })}
        </div>
    )
}

export default Card