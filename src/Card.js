import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  border-radius: 10px;
  border: 1px solid palevioletred;
  box-shadow: 3px 3px 3px 3px;
  background-color: blue;
  color: antiquewhite;
  font-size: 13px;
  width: 300px;
  height: 250px;
  margin-top: 1px;
`

const Card = ({ name, locations, classer, order, group }) => {
  const topSpeedKm = Math.round(classer * 1.60934); 

  return (
    <CardWrapper>
      <h1>Name: {name}</h1>
      <h2>Locations: {locations}</h2>
      <h3>
        Class: {classer}
      </h3>
      <h5>Order: {order}</h5>
      <p>Group: {group}</p>
    </CardWrapper>
  )
}

export default Card