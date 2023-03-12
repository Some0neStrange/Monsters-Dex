import { useState, useEffect } from 'react';
import CardList from './Component/card-list/card-list.component';
import SearchBox from './Component/search-box/search-box.component';
import './App.css'

const App = () =>
{
  const [searchField, setSearchField] = useState('');
  const [monster, setMonster] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monster);
  useEffect(
    () =>
    {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonster(users));
    }, []
  );

  useEffect(() =>
  {
    const newfilteredMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchField));
    setFilteredMonsters(newfilteredMonsters);
  }, [monster, searchField]);
  
  const onSearchChange = (event) => 
  {
    let strSearchField = event.target.value.toLowerCase();
    setSearchField(strSearchField);
  }

  return (
    <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox onSearchChange = {onSearchChange} holderString = {'Search Monster'} currentClass = {'monsters-search-box'}/>
        <CardList monster = {filteredMonsters}/>
      </div>
  )
}

// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state = {
//       monster: [],
//       search_field: '',
//     };
//   }

//   componentDidMount()
//   {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//       this.setState(
//         () => {
//           return {monster: users};
//         },

//         () => {
//           console.log(this.state);
//         }
//       ));
//   }

//   onSearchChange = (event) => 
//   {
//     const search_field = event.target.value.toLowerCase();
//     this.setState(
//       ()=>
//       {
//         return {search_field}; 
//       }
//     );
//   }

//   render()
//   {
//     const filtered_monsters = this.state.monster.filter(monster => monster.name.toLowerCase().includes(this.state.search_field));

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox onSearchChange = {this.onSearchChange} holderString = {'Search Monster'} currentClass = {'monsters-search-box'}/>
//         <CardList monster = {filtered_monsters}/>
//       </div>
//     );
//   }
// }

export default App;
