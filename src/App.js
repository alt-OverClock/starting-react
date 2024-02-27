import pokemon from './Pokemon.json'
import './App.css';
import PokemonRow from './components/PokemonRow';

function App() {
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

      <table width="500">
        <thead>
           <tr>
           <th>Name</th>
           <th>Type</th>
           </tr>
        </thead>
       
          <PokemonRow key={pokemon.id} pokemon={pokemon}/>

        
      </table>
     </div>
  );
}

export default App;
