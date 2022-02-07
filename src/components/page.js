import styled from 'styled-components'
import '../App.css'
import { state } from './state'
import { useSnapshot } from 'valtio'

const Selected = styled.div`
    width: 100%;
    /* height: 50% !important; */
    /* height: fit-content; */
    /* position: static; */
    align-items: center;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 66.67% 33.33%;
    grid-template-rows: 100%;
    border-bottom: solid 1px;
    gap: 0;

    @media screen and (max-width : 900px) {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 100%;
        height: 125vh;
    }
`
const ImgWrap = styled.div`
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  gap: calc(var(--margin)/2);
  overflow-y: hidden;

  & *:only-child{
    margin: 0 auto;
  }

  & *{
      height: 40vw;
      width: auto;
      
    @media screen and (max-width : 900px) {
        width: 95vw;
        height: auto;
    }
  }

    
`
const TextWrap = styled.div`
    height: 100%;
    border-left: solid 1px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;

    @media screen and (max-width : 900px) {
        border-top: solid 1px;
        border-right: solid 1px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 20% 80%;

    }

    .title{
        font-size: 64px;
        @media screen and (max-width : 900px) {
          font-size: 24px;
        }
    }
`
const Words = styled.div`
    width: 100%;
    /* height: 66.67vh !important; */
    height: 50%;
    /* position: static; */
    /* align-items: center; */
    justify-content: space-between;
    display: grid;
    grid-template-columns: 33.33% 66.67%;
    border-bottom: solid 1px;
    gap: 0;
    
    @media screen and (max-width : 900px) {
        grid-template-rows: 20% 80%;
        grid-template-columns: 1fr;
        height: 80%;
        a:hover{
            
        }
    }

    .title{
        font-size: 64px;
        @media screen and (max-width : 900px) {
          font-size: 24px;
        }
    }
    .DescWrap{
        border-left: solid 1px;
        border-top: none !important;
        height: 100%;
        display: flex;
        align-items: flex-start;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        @media screen and (max-width : 900px) {
           border-left: none;
            border-top: solid 1px;
            padding-top: 0;
        }
            
        &::-webkit-scrollbar{
          width: 0;
          height: 0;
        }
    }
    .DescWrap p{
        width: 50%;
        margin: 0 auto;
        line-height: 40px;
        @media screen and (max-width : 900px) {
            margin: 0;
            width: 100%;
        }
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

    @media screen and (max-width : 900px) {
        height: 100%;
        border-bottom: solid 1px;
    }

    &:first-child{
        word-break: break-word;
        height: 75%;
        border-bottom: none;

        @media screen and (max-width : 900px) {
        height: 100%;
        }
    }
    &::-webkit-scrollbar{
    width: 0;
    height: 0;
  }
`
const DescWrap = styled.div`
    overflow-y: scroll;
    height: 50%;
    border-top: solid 1px;
    padding: calc(var(--margin)/2); 

    @media screen and (max-width : 900px) {
        height: 100%;
    }

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