import pokemon from './Pokemon.json'
import './App.css';
import PokemonRow from './components/PokemonRow';
import PokemonInfo from './components/PokemonInfo';
import { useState } from 'react';

function App() {
  const [filter , setFilter] = useState("");
  const [selecteditem , setSelecteditem] = useState(null);
  
  return (
     <div>
      <h1  style={
        {
          margin :"auto",
          paddingTop :"1rem",
          width:800
        }
      }
       

       className='title'>Pokemon Search</h1>
       
      <div>
        
        <input
        style={{
          width : 400 , 
          padding : 10
        }}
        
        placeholder='Search your pokemon'onChange={(evt)=>setFilter(evt.target.value)} />

        
       <div
        style={{
          display : "grid",
          gridTemplateColumns:'70% 30%',
         
        }}
       >
      <table width="500">
        <thead>
           <tr>
           <th>Name</th>
           <th>Type</th>
           </tr>
        </thead>
       
          <PokemonRow key={pokemon.id} pokemon={pokemon} filter={filter} onSelect={(pokemon)=>setSelecteditem(pokemon)}/>
          
          
        
      </table>
      </div>
     
        <PokemonInfo {...selecteditem}/>
      </div>
       
     </div>
    
     
  );
}

export default App;
