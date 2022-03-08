import * as ParticlesOptions from "../../../Stores/Data/Particles/ParticlesOptions.json";
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import "./Particles.css";
import { ISourceOptions } from "tsparticles";
export default function ParticlesComponent() {
  const [height, setHeight] = useState("");

  useEffect(() => {
    function handleResize(): void {
      setHeight(document.body.scrollHeight + "px");
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Particles
      height={height}
      canvasClassName="example"
      options={ParticlesOptions as ISourceOptions}
    />
  );
}
