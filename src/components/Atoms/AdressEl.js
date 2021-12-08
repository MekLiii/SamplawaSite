import React from 'react'

function AdressEl({desc,prop,style,id}) {
    return (
        <div style={style} id={id}>
            <p style={{marginRight:'20px',color: '#979797'}}>{desc}</p>
            <p style={{color: 'white' }}>{prop}</p>
        </div>
    )
}
const flex = {
    display: 'flex',
}

export default AdressEl
