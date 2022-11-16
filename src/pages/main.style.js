import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: var(--margin);
  /* border-left: solid var(--border-weight);
  border-right: solid var(--border-weight); */
  width: 100%;
  height: 100%;
  font-size: 0;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  @media screen and (max-width: 900px) {
    font-size: 0;
    border-left: none;
    border-right: none;
  }

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
export const Grid = styled.div`
  columns: 3 200px;
  column-gap: 0;
  column-rule: none;
  -webkit-columns: 3 200px;
  -webkit-column-gap: 0;
  /* outline: solid var(--border-weight); */
  animation: myAnim 10s ease-out 0s 1 normal;

  @media screen and (max-width: 900px) {
    columns: 2 100px;
    -webkit-columns: 2 100px;
    padding-bottom: var(--margin) !important;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .active {
    opacity: 10%;
    cursor: default;
  }

  .block {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 0;
    transition: calc(var(--transition) * 3);

    @media screen and (max-width: 900px) {
      /* width: 50%; */
      /* height: auto; */
      padding: 5px;

      p {
        font-size: 24px !important;
        margin: 0 auto !important;
      }
    }

    p {
      font-size: 40px;
      opacity: 1 !important;
      -webkit-user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      margin: 20px;
      text-indent: 20px;
    }

    img {
      display: block;
      object-fit: cover;
      width: auto;
      min-width: 101% !important;
      min-height: 101%;
      max-width: 150%;
      /* max-height: 150%; */
      position: absolute;
      pointer-events: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .block:not(.active):hover > img {
    opacity: 0.1;
    transition: calc(var(--transition) * 1.5);
  }

  //code to make text scroll loop up
  .words p {
    animation: autoscroll 60s linear infinite;
    pointer-events: none;
    transition: 3s;
  }

  @keyframes autoscroll {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, -90%, 0);
    }
  }
  .words {
    border: var(--main-text-color) var(--border-weight) solid;
    overflow-y: scroll;
    /* height: inherit; */
    display: inline-block;

    @media screen and (max-width: 900px) {
      overflow: hidden;
    }
  }
  .words::-webkit-scrollbar {
    display: none;
  }
  .words:not(.active):hover > p {
    opacity: 0.1 !important;
    transition: var(--transition);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -o-transition: var(--transition);
    @media screen and (max-width: 900px) {
      opacity: 1 !important;
      transition: var(--transition);
    }
  }
`;
export const InfoWrap = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  padding: 20px;
  margin: auto 0;
  width: 100%;

  @media screen and (max-width: 900px) {
    border-left: solid var(--border-weight);
    border-right: solid var(--border-weight);
    grid-template-rows: 35% 65%;
    grid-template-columns: 100%;
    /* display: flex;
   flex-direction: column; */
    gap: 20vh;
    margin: 0;
    height: 125vh;
  }

  .InfoText {
    display: "flex";
    flex-direction: "column";
    gap: "5px";
    width: "50%";
    justify-content: "space-around";
    height: min-content;

    @media screen and (max-width: 900px) {
      width: "unset";
      h1 {
        padding-bottom: 5px;
      }
      p {
        text-indent: 20px;
      }
    }
  }

  .InfoPic {
    width: "min-content";
    justify-self: "flex-end";
    margin: 0 auto;
    display: block;
    @media screen and (max-width: 900px) {
      padding-bottom: 10%;
      height: min-content;
    }
  }

  h1 {
    font-size: 24px;
  }

  a:hover {
    color: var(--main-hover-color);
    transition: var(--transition);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -o-transition: var(--transition);
  }
`;
export const Footer = styled.a`
  position: fixed;
  height: var(--margin);
  bottom: 0;
  text-align: center;
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  width: calc(100vw - calc(var(--margin) * 2));
  border-top: solid var(--border-weight);
  border-bottom: solid var(--border-weight);
  border-color: var(--main-text-color);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    bottom: unset;
    top: 0;
  }

  &:hover {
    border-color: var(--main-hover-color);
    background-color: var(--main-hover-color);
    color: var(--main-bg-color);
    transition: var(--transition);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -o-transition: var(--transition);
  }
`;
