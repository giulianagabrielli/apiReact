import React from 'react';
import Table from './components/Table'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = { 
      profissionais: []
    }
  }

  componentDidMount(){

    let config = {
      headers:{
        "Content-Type":"application/json" //fala que o retorno é um json
      },
      method:"GET" //como só vamos consumir API, não precisa do body, não vai cadastrar informação. Não precisava dizer que o método é get, pq é padrão.
    }

    //consultando API. É uma solicitação AJAX.
    fetch('http://localhost:8000/api/professionals', config)
              .then(function(response){ //aguarda a promessa do fetch ser resolvida. Quando for, passa uma função de callback e trata os dados que foram enviados.
                console.log(response)
                  return response.json(); 
              }).then((json)=>{ //precisou tirar a palavra function e criar uma arrow function e dessa forma teremos o this conseguindo chegar no state que antes estava fora do escopo da função que recebia (json).
                  console.log(json);
                  this.setState({
                    ...this.state, profissionais: json
                  })

              }).catch(function(error){
                  console.log(error); 
              })



  }

  render(){
    return (
      <Table dados={this.state.profissionais}/>
    )
 
  }
}

export default App;
