import React from "react";




export default function PokemonRow({pokemon, filter,onSelect}){
   

return (
   
        <tbody>
       
        {pokemon.filter((pokemon)=>pokemon.name.english.toLowerCase().includes(filter.toLowerCase())).slice(0,20).map(pokemon=>(
    <tr key={pokemon.id}>
       <td>{pokemon.name.english}</td>
       <td>{pokemon.type.join(",")}
       </td>
       <td><button onClick={()=>{onSelect(pokemon)}} >select</button></td>
     </tr>
    
   ))}
   
   </tbody>
   
)
}