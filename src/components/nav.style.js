import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 300;
  top: 0;
  background-color: var(--main-bg-color);
  height: var(--margin);
  width: calc(100vw - calc(var(--margin) * 2));

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: calc(2 * var(--margin));
    width: 100%;
    top: unset;
    bottom: 0;

    .auth {
      width: 100% !important;
      & * {
        border-bottom: none !important;
      }
    }
  }

  .auth {
    width: min-content;
  }
`;

export const Constant = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: var(--margin);

  & .home {
    border-top: solid var(--border-weight);
    border-bottom: solid var(--border-weight);
    border-color: var(--main-text-color);
    width: ${(props) => props.width};
    /* line-height: 10px; */
    font-size: 24px;
    /* border-right: solid var(--border-weight);
    border-color: var(--main-text-color); */
    padding: 0 20px;
    /* padding-bottom: 6px; */
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    @media screen and (max-width: 900px) {
      width: 20%;
      font-size: 18px;
    }
  }

  & .home:hover {
    border-color: var(--main-hover-color);
    background-color: var(--main-hover-color);
    color: var(--main-bg-color);
    transition: var(--transition);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -o-transition: var(--transition);
  }
`;
export const Links = styled.div`
  height: var(--margin);
  width: 33.33%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @media screen and (max-width: 900px) {
    width: 80%;
  }

  & a,
  & .link {
    border-bottom: solid var(--border-weight) var(--main-text-color);
    border-top: solid var(--border-weight) var(--main-text-color);
    border-left: solid var(--border-weight) var(--main-text-color);
    height: 100%;
    width: inherit;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 0 10px;

    @media screen and (max-width: 900px) {
      font-size: 18px;
    }
  }

  & .link {
    width: fit-content;
    white-space: nowrap;
    border-right: solid var(--border-weight) var(--main-text-color);
    background-color: var(--red);
    color: var(--main-bg-color);
    border-color: var(--main-bg-color);
  }
  & a:hover,
  & .link:hover {
    border-right: solid var(--border-weight) var(--main-text-color);
    border-color: var(--main-hover-color);
    background-color: var(--main-hover-color);
    color: var(--main-bg-color);
    transition: var(--transition);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -o-transition: var(--transition);
  }
`;
