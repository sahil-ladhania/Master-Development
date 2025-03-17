import './App.css'

function App() {
  return (
    <>
      <Todo title='Complete TS' description='Complete TS from basic to advance.' isDone={false} />
    </>
  )
}

interface TodoProp{
  title : string,
  description : string,
  isDone : boolean
}

function Todo(props:TodoProp) {
  return(
    <div>
      <h1>Title : {props.title}</h1>
      <h2>Description : {props.description}</h2>
      <h3>Is Completed : {props.isDone === true ? "Completed" : "Not Completed"}</h3>
    </div>
  )
}

export default App
