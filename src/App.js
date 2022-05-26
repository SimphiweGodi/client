import "./App.css";
import {useEffect, useState} from "react";
import Axios from "axios";



function App() {
const [listOfUsers, setListOfUsers] = useState([]);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [height, setHeight] = useState(0);


  useEffect(() => {
    Axios.get("http://localhost:8080/getUsers").then((response) =>{
    setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:8080/createUser",{ name, email, height}).then((response) =>{
    setListOfUsers([...listOfUsers,{
      name, email, height,
    }])
    alert("Email sent.");
  });
    };

return (
	<div className="body">
	{/* <div className="usersDisplay">
    {listOfUsers.map((user) => {
      return(
    <div>
      <h3>Name:{user.name}</h3>
      <h3>Email:{user.email}</h3>
      <h3>Height:{user.height}</h3>
    </div>
  );
    })}
	
	</div> */}
  <div className="fields">
    <input  type="text" placeholder="Name..." onChange={(event) => {setName(event.target.value);}}/>
    <input  type="text" placeholder="Email..." onChange={(event) => {setEmail(event.target.value);}}/>
    <input  type="number" placeholder="Height..." onChange={(event) => {setHeight(event.target.value);}}/>
    <button onClick={createUser}>Submit</button>
  </div>
	</div>
);
}

export default App;
