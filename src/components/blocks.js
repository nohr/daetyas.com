import { NavLink } from "react-router-dom";

export const shuffledBlocks = (snap, type) => {
  const musicBlocks = snap.music.map(({ path, name, cover }) => (
    <NavLink to={`/music/${path}`} key={name} className="block">
      <p>{name}</p>
      {cover ? <img src={cover} key={Math.random()} alt="placeholder" /> : null}
    </NavLink>
  ));

  const photosBlocks = snap.photos.map(({ path, name, cover }) => (
    <NavLink to={`/photos/${path}`} key={name} className="block">
      <p>{name}</p>
      {cover ? <img src={cover} key={Math.random()} alt="placeholder" /> : null}
    </NavLink>
  ));

  const wordsBlocks = snap.words.map(({ path, name, description }) => (
    <NavLink to={`/words/${path}`} key={name} className="block words">
      <p>{description}</p>
    </NavLink>
  ));

  const array = musicBlocks.concat(photosBlocks).concat(wordsBlocks);
  // randomize items
  // eslint-disable-next-line no-unused-vars
  function randomizeBlocks(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  if (type === "home") {
    // return randomizeBlocks(array);
    return array;
  } else if (type === "words") {
    return wordsBlocks;
  } else if (type === "music") {
    return musicBlocks;
  } else if (type === "photos") {
    return photosBlocks;
  }
};

//Intersection Observer callback function and options
export const randomizeHeight = () => {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    block.style.height = `${Math.floor(Math.random() * 200) + 250}px`;
  });
};

export const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

// Scroll to top
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
