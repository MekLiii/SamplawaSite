import React from 'react'

function TableElement({numer, name, pozycja, bramki,asysty, zKartki,cKartki,mecze,style }) {
    return (
        <tr style={style}>
          <td>{numer}</td> <td>{name}</td> <td>{pozycja}</td> <td>{bramki}</td> <td>{asysty}</td> <td>{zKartki}</td> <td>{cKartki}</td> <td>{mecze}</td> 
        </tr>
    )
}

export default TableElement


const styles = {
    border: '3px solid black',
}