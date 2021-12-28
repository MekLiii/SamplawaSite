import React from 'react'
import styled from 'styled-components'

function PlayerSec({title, src,name}) {
    return (
        <PlayersHolder>
            <Top><h1>{title}</h1></Top>
            <Bottom>
                <Img src={src} alt={src}/>
                <span>{name}</span>
            </Bottom>
        </PlayersHolder>
    )
}
const PlayersHolder = styled.div`
  display:flex;
  flex-direction:column;
  height:100px;
  width:100%;
  background-color:grey;
  justify-content:center;
  align-items:center;
  
`
const Top = styled.div`
    height:20%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Bottom = styled.div`
    height:80%;
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const Img = styled.img`
    width:75px;
    height:75px;
    border-radius:50%;
`
export default PlayerSec
