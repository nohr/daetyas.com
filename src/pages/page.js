import ReactPlayer from "react-player";
import { useSnapshot } from "valtio";
import { state } from "../utils/state";
import { Backdrop, DescWrap, ImgWrap, MusicWrap, Selected, TextWrap, TitleWrap, Words } from "./page.style";

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
        } else if (prop.type === 'music') {
            return (
                <>
                    {page.map((work) => (
                        <Selected key={Math.random()} id='page'>
                            {work.link && <MusicWrap>
                                <ReactPlayer url={work.link} />
                            </MusicWrap>}
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