import React from "react"



export default function PokemonRow({pokemon}){


return (
        <tbody>
        {pokemon.slice(0,20).map(pokemon=>(
    <tr key={pokemon.id}>
       <td>{pokemon.name.english}</td>
       <td>{pokemon.type.join(",")}
      </td>
    </tr>
   ))}
   </tbody>
)
}