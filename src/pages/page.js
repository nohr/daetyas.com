import ReactPlayer from "react-player";
import { useSnapshot } from "valtio";
import { convertDate } from "../utils/common";
import { state } from "../utils/state";
import {
  Backdrop,
  DescWrap,
  ImgWrap,
  MusicWrap,
  Selected,
  TextWrap,
  TitleWrap,
  Words,
} from "./page.style";

export function Related() {
  return (
    <Backdrop>
      <p>Related Works</p>
    </Backdrop>
  );
}

export function Page({ type, page }) {
  const snap = useSnapshot(state);
  const selected = snap[`${type}`].filter(({ name }) => name === page);

  if (selected) {
    if (type === "words") {
      return (
        <>
          {selected.map(({ description, name, date }) => (
            <Words id="page" key={name}>
              <TitleWrap className="titleWrap">
                <p className="title">{name}</p>
                <p>{convertDate(date)}</p>
              </TitleWrap>
              {description !== "" ? (
                <DescWrap className="DescWrap">
                  <p>{description}</p>
                </DescWrap>
              ) : null}
            </Words>
          ))}
        </>
      );
    } else {
      return (
        <>
          {selected.map(({ description, content, url, name, date }) => (
            <Selected id="page" key={name}>
              {type === "music" && url !== "" ? (
                <MusicWrap>
                  <ReactPlayer url={url} />
                </MusicWrap>
              ) : null}
              {type === "photos" && content && content.length !== 0 ? (
                <ImgWrap>
                  {content.map(({ url, name }) => (
                    <img src={url} alt={name} key={name} />
                  ))}
                </ImgWrap>
              ) : null}
              <TextWrap>
                <TitleWrap className="titleWrap">
                  <p className="title">{name}</p>
                  <p>{convertDate(date)}</p>
                </TitleWrap>
                {description !== "" ? (
                  <DescWrap className="DescWrap">
                    <p>{description}</p>
                  </DescWrap>
                ) : null}
              </TextWrap>
            </Selected>
          ))}
        </>
      );
    }
  }
}
