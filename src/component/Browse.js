import useCurrentPlaying from '../CustomHoooks/useCurrentplaying'
import Header from './Header'

const Browse = () => {

  useCurrentPlaying();

  
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse