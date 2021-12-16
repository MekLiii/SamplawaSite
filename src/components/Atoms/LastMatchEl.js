import React from 'react'
import styled from 'styled-components'

function LastMatchEl({enemy,date, onClick}) {
    return (
        <StyledBox onClick={onClick}>
            <P>Sampława</P>
            <P>{enemy}</P>
            <P style={{color:'#979797'}}>{date}</P>
        </StyledBox>
    )
}
const StyledBox = styled.div`
    width:auto;
    min-width:80%;
    height:75px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/samplawa-e85f7.appspot.com/o/bg-pattran.png?alt=media&token=8d50b11b-d328-466e-81e8-333962ee63c8");
    background-color: black;
    margin-top:10px;
    cursor:pointer;
    border:1px solid rgb(255, 230, 0);
`
const P = styled.p`
    color:white;
`

export default LastMatchEl
