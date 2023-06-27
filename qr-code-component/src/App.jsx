import './App.css'

function App() {
  return (
    <>
      <div className='card'>
        <img className="card__image" src={'/src/assets/img/image-qr-code.png'}></img>
        <div className='card__text'>
          <h3>Improve your front-end skills by building projects</h3>
          <p className='card__text-description'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </>
  )
}

export default App
