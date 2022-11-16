import { useSnapshot } from "valtio";
import { state } from "../utils/state";
import { Container, InfoWrap } from "./main.style";

export function Info() {
  const snap = useSnapshot(state);
  return (
    <Container>
      <InfoWrap>
        <div className="InfoPic">
          {snap.info.map((data) => (
            <img key={Math.random()} src={data.photo} alt="self" />
          ))}
        </div>
        <div className="InfoText">
          <div style={{ paddingBottom: "30px" }}>
            <h1>About</h1>
            {snap.info.map((data) => (
              <p key={Math.random()}>{data.about}</p>
            ))}
          </div>
          <div>
            <h1>Email</h1>
            {snap.info.map((data) => (
              <a key={Math.random()} href={`mailto ${data.email}`}>
                {data.email}
              </a>
            ))}
          </div>
        </div>
      </InfoWrap>
    </Container>
  );
}