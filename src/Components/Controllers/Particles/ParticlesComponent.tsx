import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import "./Particles.css";
import { ISourceOptions } from "tsparticles";

interface IParticlesComponent {
  options: ISourceOptions;
}

export default function ParticlesComponent(props: IParticlesComponent) {
  const { options } = props;
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
    <Particles height={height} canvasClassName="example" options={options} />
  );
}
