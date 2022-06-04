import React, { useContext } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouse-context";
import { DotDiv, RingDiv } from "./DotRingStyles";

const DotRing = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <RingDiv x={x} y={y} className={"ring " + cursorType}></RingDiv>
      <DotDiv x={x} y={y} className={"dot " + cursorType}></DotDiv>
    </>
  );
};

export default DotRing;
