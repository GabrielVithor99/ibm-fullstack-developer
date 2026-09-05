function App(props){

  const currDate  = new Date();

  return(
    <div>
    <h1>Gabriel Mota!</h1>
    <h2>Today is {currDate.toLocaleDateString()} and now is {currDate.toLocaleTimeString()}</h2>
    </div>
  )
}

export default App;