import React from 'react'
import styled from 'styled-components'

function AtomicPlayer({name, minut}) {
    return (
        <StyledBox>
            <p>{name}</p>
            <p>{minut}'</p>
        </StyledBox>
    )
}
const StyledBox = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
`

export default AtomicPlayer
