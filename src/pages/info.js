import { useSnapshot } from "valtio";
import { state } from "../utils/state";
import { Container, InfoWrap } from "./main.style";

export function Info() {
  const snap = useSnapshot(state);
  return (
    <Container>
      <InfoWrap>
        <div className="InfoPic">
          <img src={snap.photo} alt="self" />
        </div>
        <div className="InfoText">
          <div style={{ paddingBottom: "30px" }}>
            <h1>About</h1>
              <p>{snap.about}</p>
          </div>
          <div>
            <h1>Email</h1>
              <a href={`mailto: ${snap.email}`}>
                {snap.email}
              </a>
          </div>
        </div>
      </InfoWrap>
    </Container>
  );
}