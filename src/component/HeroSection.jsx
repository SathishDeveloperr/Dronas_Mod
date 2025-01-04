import HeroModel from '../Models/HeroModel';

const HeroSection = () => {
  return (
    <div className='flex h-screen flex-col  lg:flex-row xl:flex-row justify-center items-center  '>

      <div className='flex-1 w-full md:h-1/2'style={{backgroundColor:'red'}}>
        <h1 className='md:text-10xl sm:text-10xl'>Dronas</h1>
      </div>

      <div className='flex-1 w-full md:h-1/2' style={{backgroundColor:'skyblue'}}>
        <HeroModel />
      </div>

    </div>
  );
};

export default HeroSection;
