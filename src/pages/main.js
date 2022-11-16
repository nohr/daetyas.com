import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSnapshot } from "valtio";
import { Page } from "./page";
import { state } from "../utils/state";
import { Container, Grid } from "./main.style";

export default function Content(arg) {
  const snap = useSnapshot(state);
  const array = snap[arg.type];
  const gridRef = useRef(null);
  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop();

  //Intersection Observer - run function when visible
  const callbackFunction = () => {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach(function randomize(block) {
      block.style.height = `${Math.floor(Math.random() * 200) + 250}px`;
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = () => {
    const value = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    return value;
  };

  useEffect(() => {
    const ref = gridRef.current;
    const observer = new IntersectionObserver(callbackFunction, options());
    if (ref) observer.observe(ref);
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [options]);

  const shuffledBlocks = () => {
    const musicBlocks = snap.music.map((work) => (
      <NavLink to={`/music/${work.name}`} key={work.name} className="block">
        <p>{work.title}</p>
        <img src={work.images[0]} key={Math.random()} alt="placeholder" />
      </NavLink>
    ));

    const photosBlocks = snap.photos.map((work) => (
      <NavLink to={`/photos/${work.name}`} key={work.name} className="block">
        <p>{work.title}</p>
        <img src={work.images[0]} key={Math.random()} alt="placeholder" />
      </NavLink>
    ));

    const wordsBlocks = snap.words.map((work) => (
      <NavLink
        to={`/words/${work.name}`}
        key={work.name}
        className="block words"
      >
        <p>{work.statement}</p>
      </NavLink>
    ));

    const array = musicBlocks.concat(photosBlocks).concat(wordsBlocks);

    // randomize items
    if (arg.type !== "home") {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    return array;
  };

  if (arg.type === "home") {
    // Show random entries from both Music and Photos
    return (
      <Container>
        {arg.page && <Page page={arg.page} type={arg.type} />}
        {/* {arg.arg && <Related />} */}
        <Grid ref={gridRef}>{shuffledBlocks()}</Grid>
      </Container>
    );
  } else if (arg.type === "words") {
    return (
      <Container>
        {arg.page && <Page page={arg.page} type={arg.type} />}
        {/* {arg.arg && <Related />} */}
        <Grid ref={gridRef}>
          {array.map((work) => (
            <NavLink
              to={`/words/${work.name}`}
              key={work.name}
              className="block words"
            >
              <p>{work.statement}</p>
            </NavLink>
          ))}
        </Grid>
      </Container>
    );
  } else {
    return (
      <Container>
        {arg.page && <Page page={arg.page} type={arg.type} />}
        {/* {arg.arg && <Related />} */}
        <Grid ref={gridRef}>
          {array.map((work) => (
            <NavLink
              to={`/${arg.type}/${work.name}`}
              key={work.name}
              className="block"
            >
              <p>{work.title}</p>
              {work.images && (
                <img
                  src={work.images[0]}
                  key={Math.random()}
                  alt="placeholder"
                />
              )}
            </NavLink>
          ))}
        </Grid>
      </Container>
    );
  }
}
