import { useEffect, useRef } from "react";
import { Page } from "./page";
import { Container, Grid } from "./main.style";
import { state } from "../utils/state";
import { useSnapshot } from "valtio";
import {
  options,
  randomizeHeight,
  scrollToTop,
  shuffledBlocks,
} from "../components/blocks";

export default function Content({ type, page }) {
  const snap = useSnapshot(state);
  const gridRef = useRef(null);
  scrollToTop();

  //Intersection Observer - randomize height when visible
  useEffect(() => {
    const ref = gridRef.current;
    const observer = new IntersectionObserver(randomizeHeight, () => options);
    if (ref) observer.observe(ref);
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [() => options]);

  return (
    <Container>
      {page && <Page type={type} page={page} />}
      <Grid ref={gridRef}>{shuffledBlocks(snap, type)}</Grid>
    </Container>
  );
}
