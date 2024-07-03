import useCurrentPlaying from '../CustomHoooks/useCurrentplaying'
import usePopularmovie from '../CustomHoooks/usePopularmovie';
import useTVshow from '../CustomHoooks/useTVshow';
import useToprated from '../CustomHoooks/useToprated';
import Header from './Header'
import MainVideoContainer from './MainVideoContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useCurrentPlaying();
  usePopularmovie();
  useToprated();
  useTVshow();
  

  
  return (
    <div className='bg-black scrollbar-hide'>
      <Header/>
      <MainVideoContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse