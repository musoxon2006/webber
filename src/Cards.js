import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  justify-content: space-evenly;
  align-items: center;
`

const Cards = ({ zoos }) => {
  return (
    <CardContainer>
      {zoos.map((zoo, index) => (
        <Card
          key={index}
          name={zoo.name}
          locations={zoo.locations}
          classer={zoo.characteristics.top_speed}
          order={zoo.characteristics.lifespan}
          group={zoo.characteristics.favorite_food}
        />
      ))}
    </CardContainer>
  )
}

export default Cards;
