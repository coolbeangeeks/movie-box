import useCurrentPlaying from '../CustomHoooks/useCurrentplaying'
import Header from './Header'
import MainVideoContainer from './MainVideoContainer';

const Browse = () => {

  useCurrentPlaying();

  
  return (
    <div>
      <Header/>
      <MainVideoContainer/>
    </div>
  )
}

export default Browse