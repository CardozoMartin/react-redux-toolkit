
import { useDispatch } from "react-redux"
import Header from "./components/Header";
import Email from "./components/Email";
import { useEffect } from "react";
import { addUser } from "./redux/userSlice";

import "./App.css"

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response)=> response.json())
    .then((data)=>dispatch(addUser(data)))
    .catch((error)=>console.log(error))
  })
  return (
    <div>
      <Header></Header>
      <Email></Email>
    </div>
  )
}

export default App;