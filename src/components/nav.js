import React from 'react'
import styled from 'styled-components'

const Navbar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 20px 0;
position: absolute;
z-index: 300;
top: 0;
width: 100%;
`

const Links = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 30px;
padding-right: 20px;
`

const Home = styled.p`
font-size: 30px;
padding-left: 20px;
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
