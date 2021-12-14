import React from 'react'
import styled from 'styled-components'

function AtomicPlayer({name, minut}) {
    return (
        <StyledBox>
            <P>{name}</P>
            <P>{minut}'</P>
        </StyledBox>
    )
}
const StyledBox = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    padding-right:30px;
    padding-left:30px;
`
const P = styled.p`
    color: white;
`

export default AtomicPlayer
