import styled from 'styled-components'
import '../App.css'
import '../block.scss'
import bau from '../bauhaus.png'

const Selected = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  border-bottom: solid 1px;
  gap: 0;
`
const ImgWrap = styled.div`
  height: 100%;
  width: 50%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  gap: calc(var(--margin)/2);

  & *{
      height: 100%;
      width: auto;
  }
`
const TextWrap = styled.div`
    width: 50%;
    height: 100%;
    border-left: solid 1px;

    .title{
        font-size: 40px;
    }
    .padding{
        padding: 0 var(--margin);
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-around;
    }
`

const TitleWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
`

const DescWrap = styled.div`
    overflow-y: scroll;
    height: 50%;

    p{
        text-indent: 20px;
    }

`

const Backdrop = styled.div`
    /* position: absolute; */
    z-index: 50;
    height: 50%;
    width: 100%; 
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(24, 26, 27, 100) 0%,
      rgba(24, 26, 27, 0) 25%
    ); 

    & p{
        padding: var(--margin);
    }
`
export function Related() {

    return (
        <Backdrop>
            <p>Related Works</p>
        </Backdrop>
    )
}
export function Page() {
    const link = bau;
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante augue, iaculis sit amet sem nec, semper volutpat tellus. In egestas molestie diam, vel posuere eros consequat ut. Proin id ex dolor. Nullam enim est, accumsan sit amet leo vitae, vulputate blandit ligula. Integer scelerisque ex ut orci bibendum luctus. Nulla urna mauris, tincidunt non sem vel, posuere efficitur mauris. Etiam vel magna eget orci hendrerit convallis. Cras accumsan, odio sollicitudin condimentum bibendum, ipsum massa vehicula ligula, quis placerat nisl ipsum venenatis odio.` + "<br/>" + `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum ante augue, iaculis sit amet sem nec, semper volutpat tellus.In egestas molestie diam, vel posuere eros consequat ut.Proin id ex dolor.Nullam enim est, accumsan sit amet leo vitae, vulputate blandit ligula.Integer scelerisque ex ut orci bibendum luctus.Nulla urna mauris, tincidunt non sem vel, posuere efficitur mauris.Etiam vel magna eget orci hendrerit convallis.Cras accumsan, odio sollicitudin condimentum bibendum, ipsum massa vehicula ligula, quis placerat nisl ipsum venenatis odio.`;
    return (
        <>
            <Selected>
                <ImgWrap>
                    <img src={link} alt="placeholder" />
                    <img src={link} alt="placeholder" />
                    <img src={link} alt="placeholder" />
                    <img src={link} alt="placeholder" />
                    <img src={link} alt="placeholder" />
                </ImgWrap>
                <TextWrap>
                    <div className='padding'>
                        <TitleWrap>
                            <p className='title'>This is a Project Title</p>
                            <p>2021</p>
                        </TitleWrap>
                        <DescWrap>
                            <p>{text}</p>
                        </DescWrap>
                    </div>
                </TextWrap>
            </Selected>
        </>
    )
}