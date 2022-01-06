import styled from 'styled-components'
import '../App.css'
import { state } from './state'
import { useSnapshot } from 'valtio'

const Selected = styled.div`
    width: 100%;
    height: 66.67vh !important;
    display: flex;
    position: static;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    flex-direction: row;
    border-bottom: solid 1px;
    gap: 0;
`
const ImgWrap = styled.div`
  height: 100%;
  width: 66.67%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  gap: calc(var(--margin)/2);
  /* padding: calc(var(--margin)/2); */

  &:only-child{
    width: 100%;
    height: auto;
  }

  & *{
      height: 100%;
      width: auto;
  }
`
const TextWrap = styled.div`
    width: 33.33%;
    height: 100%;
    border-left: solid 1px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;

    .title{
        font-size: 64px;
    }
`
const Words = styled.div`
    width: 100%;
    height: 66.67vh !important;
    display: flex;
    position: static;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    flex-direction: row;
    border-bottom: solid 1px;
    gap: 0;

    .title{
        font-size: 64px;
    }
    .DescWrap{
        border-left: solid 1px;
        border-top: none !important;
        height: 100%;
    }
    .titleWrap{
        width: 33.33% !important;
        height: 100%;
    }
`
const TitleWrap = styled.div`
    padding: calc(var(--margin)/2)  calc(var(--margin)/2) 0;
    height: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;

    &:first-child{
        word-break: break-word;
        height: 75%;
    }
`
const DescWrap = styled.div`
    overflow-y: scroll;
    height: 50%;
    border-top: solid 1px;
    padding: calc(var(--margin)/2); 

    p{
        text-indent: 20px;
    }
`
const Backdrop = styled.div`
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
export function Page(prop) {
    const snap = useSnapshot(state);
    const page = snap[`${prop.type}`].filter(function (val) { return val.name === prop.page });
    console.log(prop.type);

    if (page) {
        if (prop.type === 'words') {
            return (
                <>
                    {page.map((work) => (
                        <Words key={Math.random()} id='page'>
                            <TitleWrap className='titleWrap'>
                                <p className='title'>{work.title}</p>
                                <p key={Math.random()}>{work.year}</p>
                            </TitleWrap>
                            <DescWrap className='DescWrap'>
                                <p key={Math.random()}>{work.statement}</p>
                            </DescWrap>
                        </Words>
                    ))}
                </>
            )
        } else {
            return (
                <>
                    {page.map((work) => (
                        <Selected key={Math.random()} id='page'>
                            {work.images && <ImgWrap>
                                {work.images.map((url) => (
                                    <img src={url} alt="placeholder" key={Math.random()} />
                                ))}
                            </ImgWrap>}
                            <TextWrap>
                                <TitleWrap className='titleWrap'>
                                    <p className='title'>{work.title}</p>
                                    <p key={Math.random()}>{work.year}</p>
                                </TitleWrap>
                                <DescWrap className='DescWrap'>
                                    <p key={Math.random()}>{work.statement}</p>
                                </DescWrap>
                            </TextWrap>
                        </Selected>
                    ))}
                </>
            )
        }
    }
}