import React from 'react';


export default class Table extends React.Component {

    render(){
        return(
            <>
            <h2>Profissionais</h2>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Github</th>
                </tr>
              </thead>
              <tbody> 
                  {this.props.dados.map((item)=> ( //map recebe como parâmetro uma função anônima. O parâmetro é um objeto do array. O retorno é o html. Sempre que usa o map,precisa da key para ajudar na performance. Dentro do map, não pode usar fragment com a key = {nome.id}
                <tr key={item.id}> 
                    <td>{item.name}</td>
                    <td>{item.github}</td>
                </tr>
                  ))}
              </tbody>
            </table>
            </>
        )
    }

}