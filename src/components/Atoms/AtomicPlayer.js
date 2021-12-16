import React from 'react'
import styled from 'styled-components'

function AtomicPlayer({name, minut, style,other}) {
    return (
        <StyledBox style={style}>
            <P>{name}</P>
            <P>{minut}'</P>
            {other}
        </StyledBox>
    )
}
const StyledBox = styled.div`
    display:flex;
    ${'' /* min-width:100%; */}
    width:auto;
    justify-content:space-between;
    padding-right:30px;
    padding-left:30px;
    
`
const P = styled.p`
    color: white;
`

export default AtomicPlayer
