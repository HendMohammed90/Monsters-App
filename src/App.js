import "./App.css";
import {useEffect, useState } from "react";
import CardList from "./components/lits-data/card-list.component";
import SearchBox from "./components/search/search-box.component";


const App = ()=> {

  const [searchKey, setSearchKey] = useState("");
  const [ monsters , setMonsters] = useState([])
  const [filterdData , setFilterdData] = useState(monsters);

  const onSearch = (event) => {
    const searchKey = event.target.value.toLocaleLowerCase();
    setSearchKey(searchKey);
  };
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((responce) => responce.json())
    .then((users) => setMonsters(users)
    ) 
  } , []);


  useEffect(()=>{
    const newFilterdData = monsters.filter((item) => {
    return item.name.toLocaleLowerCase().includes(searchKey);
    });
    setFilterdData(newFilterdData);
  } , [monsters , searchKey]);


  return(
    <div>
    <header className="App-header">
      <p className="app-title">Monsters</p>
      <SearchBox search={onSearch} />
      <CardList monsters={filterdData} />
    </header>
  </div>
  );
}

export default App;
