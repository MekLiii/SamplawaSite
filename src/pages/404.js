import * as React from "react"
import Layout from "../components/Organism/Layout"
import styled from 'styled-components'
import { Link } from "gatsby"


const NotFoundPage = () => {
  return (
    <Layout>
      <Box>
        <span style={{color:"#ffe600", fontSize:"30px"}}>Upsss... nie znaleziono strony</span>
        <span style={{color:"#ffe600", fontSize:"30px"}}><Link to="/" style={{color:"#ffe600"}}>Wróć na stronę główną</Link></span>
      </Box>
    </Layout>
  )
}
const Box = styled.div`
  height:82vh;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`

export default NotFoundPage
