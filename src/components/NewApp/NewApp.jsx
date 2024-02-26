import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import Left from './Left/Left'
import Right from './Right/Right'
import Banner from './Banner/Banner'
import './NewApp.scss'

const NewApp = () => {
  useDocumentTitle('Truckstop Secure Login')
  return (
    <>
      <Banner />
      <div className='new-app'>
        <div className="new-app__left-wrapper">
          <Left />
        </div>
        <div className="new-app__right-wrapper">
          <Right />
        </div>
      </div>
    </>
  )
}

export default NewApp