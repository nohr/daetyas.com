import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
display: flex;
  flex-wrap: wrap;
`

const Block = styled.div`
display: block;
  height: 150px;
  line-height: 150px;
  background: red;
  color: white;
  margin: 0 1rem 1rem 0;
  text-align: center;
  font-family: system-ui;
  font-weight: 900;
  font-size: 2rem;
  flex: 1 0 auto;
  border: 3px solid red;
`
function ImgGrid() {
    return (
        <Grid>
            <Block>
                1
            </Block>
            <Block>
                2
            </Block>
            <Block>
                3
            </Block>
            <Block>
                4
            </Block>
            <Block>
                5
            </Block>
            <Block>
                6
            </Block>
            <Block>
                7
            </Block>
            <Block>
                8
            </Block>
            <Block>
                9
            </Block>
            <Block>
                10
            </Block>
            <Block>
                11
            </Block>
            <Block>
                12
            </Block>
            <Block>
                13
            </Block>
            <Block>
                14
            </Block>
            <Block>
                15
            </Block>
        </Grid>
    )
}

export default ImgGrid
