import './App.css'
import { openModal, openModalAccount } from './components/OpenModal'

function App() {
  

  function handleOpenModal(){
    openModal();
  }

  function handleOpenModal2(){
    openModalAccount();
  }

  return (
    <>
    <div className='App'>
      <button className='modalButton' onClick={handleOpenModal}>Abrir modal</button>
      <button className='modalButton' onClick={handleOpenModal2}>Abrir modal</button>

    </div>
    </>
  )
}

export default App
