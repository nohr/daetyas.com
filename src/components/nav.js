import React from 'react'
import styled from 'styled-components'

const Navbar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 20px;
`

const Links = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 30px;
`

const Home = styled.p`
font-size: 30px;
`

function Nav() {
    return (
        <Navbar>
            <Home>daetyas</Home>
            <Links>
                <p>music</p>
                <p>photos</p>
                <p>about</p>
                <p>contact</p>
            </Links>
        </Navbar>
    )
}

export default Nav
