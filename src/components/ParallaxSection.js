import { Parallax } from 'react-parallax';
import './ParallaxSection.css'

const ParallaxSection = () => {
  return (
    <Parallax
      bgImage="./banner.png"  // Add the banner image path here
      strength={500} // Adjust the speed/strength of the parallax effect
    >
      <div style={{ height: '500px' }}>
        <div className="parallax-content">
          <h1>Maitri Run 2024</h1>
          <p>Run for a Cause, Run for Health</p>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
