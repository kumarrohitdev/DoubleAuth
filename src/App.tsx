import { useRecoilState } from 'recoil'
import './App.css'
import { Navbar } from './components/Navbar'
import { AddDataPopup } from './components/AddDataPopup'
import { AddDataPopupState } from './stores/atoms/addPopup'

function App() {

  const [isOpen, setIsOpen] = useRecoilState(AddDataPopupState)
  return (
    <div className='w-[250px] h-[400px] overflow-auto '>
      <Navbar />
      {isOpen &&
        <AddDataPopup isOpen={isOpen} setIsOpen={setIsOpen} />
      }
    </div>
  )
}

export default App
