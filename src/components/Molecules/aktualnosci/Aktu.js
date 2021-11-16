import React from 'react'
import AktuEl from './AktuEl'
import img from '../../../images/article.jpg'

function Aktu() {
    return (
        <div style={container}>
            <AktuEl img={img} 
            data="11.02.2020" 
            heading="Zwycięstwo sampławy"
            text="Chujów sto Chujów sto Chujów sto Chujów sto Chujów sto"
            />
        </div>
    )
}

const container = {
    width: '100%',
    minHeight:'5vh',
    backgroundColor: "#fed053",
}

export default Aktu
