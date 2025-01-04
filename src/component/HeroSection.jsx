import HeroModel from '../Models/HeroModel';

const HeroSection = () => {
  return (
    <div className='flex mobile:flex-col mobile:h-screen mobile:justify-center'>

      <div className='flex-1 mobile:flex mobile:items-center mobile:justify-center'  style={{backgroundColor:'red'}}>
        <h1 className='mobile:text-7xl text-center'>Dronas</h1>
      </div>

      <div className='flex-3' style={{backgroundColor:'skyblue'}}>
        <HeroModel />
      </div>

    </div>
  );
};

export default HeroSection;
