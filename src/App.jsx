import './App.css'
import openModal  from './components/OpenModal'

function App() {

  function handleOpenModal(){
    openModal();
  }

  return (
    <>
    <div className='App'>
      <button onClick={handleOpenModal}>Abrir modal</button>

    </div>
    </>
  )
}

export default App
