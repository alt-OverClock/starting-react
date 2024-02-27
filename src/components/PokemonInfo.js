import React from "react";


export default function PokemonInfo({name , base}){
    return (
        <div
        style={{
         position:"absolute",
         marginLeft:700,
         marginTop : -600,
         width : 300,
         height : 300,
         background : "#f3f3f3", 
         alignItems:"center",
         borderRadius : 15
        }}

     > 
     <h1
     style={{
        padding : 10,
        textAlign : 'center'
     }}
     
     >{name.english}</h1>
     <div 
       style={{
        padding : 10,

       }}
     >
       <table>
        {Object.keys(base).map((key)=>(
            <tr key={key}
               style={{
                
                padding :2,
                fontSize : 'large',
                fontWeight : 'bold',
                
                
               }}
            >
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
        ))}
       </table>
     </div>
     </div>
    )
}