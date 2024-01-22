
import {  useSelector } from "react-redux"
const Header = () => {
    const user = useSelector((state)=> state.user)
    
  return (
    <header>
        <h1>Redux Tooltik Example</h1>
        <ul>
            <li>name : {user.name} </li>
            <li>email : {user.email}</li>
            <li>username :{user.username} </li>
        </ul>
    </header>
  )
}

export default Header