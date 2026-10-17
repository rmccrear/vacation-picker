

function App () {

  // const clickHandler = () => {
  function clickHandler42() {
    alert("Hello there!")
  }



  return (
    <div>
      <div>Hello World</div>
      <button onClick={clickHandler42}>Click Me</button>
      
      <div className="button-container">
        {/** Put buttons here */}
        <p id="message">Click the Button to change me!</p>
        <button id="changeButton">What's the worst that can happen?</button> 
        <button onClick={clickHandler}>Press here</button>
        <button onClick={clickHandler}>Make Magic!</button>
        <button onClick={clickHandler}>Give it a Try!</button>




      </div>
    </div>
  )
}

export default App
