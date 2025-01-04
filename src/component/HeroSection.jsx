import HeroModel from '../Models/HeroModel';

const HeroSection = () => {
  return (
    <div className='flex mobile:flex-col mobile:h-screen mobile:justify-center laptop:flex-row'>
      <div className='flex-1 mobile:flex mobile:flex-col mobile:items-center mobile:justify-center' >
        <h1 className='mobile:text-7xl text-center'>Dronas</h1>
        <p className='text-center laptop:text-left laptop:px-28 '>
          Dronas is a leading innovator in drone manufacturing and research & development (R&D). We specialize in designing cutting-edge drones tailored for diverse industries, including agriculture, defense, logistics, and environmental monitoring.
          Our commitment to excellence drives us to create advanced drone solutions that are not only efficient but also sustainable. With a dedicated team of engineers, researchers, and visionaries, Dronas constantly pushes the boundaries of technology to deliver unmatched precision, performance, and reliability.
          At Dronas, innovation takes flight. Whether it's pioneering autonomous systems or crafting drones for specialized applications, we aim to transform the way the world operates through the power of unmanned aerial technology.
        </p>
      </div>

      <div className='flex-1' >
        <HeroModel />
      </div>

    </div>
  );
};

export default HeroSection;
