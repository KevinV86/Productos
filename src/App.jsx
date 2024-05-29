import { Component } from 'react'
import axios from 'axios';
import './App.css'


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      categorias:[]
    }
  }
  buscarCategorias(){
    const url = "https://productos.ctpoba.edu.ar/api/categorias"
    axios.get(url)
    .then((resp)=>{
      this.setState({categorias: resp.data.categorias});
    })
    .catch ((error)=>{
      console.log(error);
    })
  }

  render(){
    return(
      <div>
       <span>APP</span>
       <input
        type="button"
        value="buscar"
        onAuxClick={()=> this.buscarCategorias()}
         />
      </div>

    )

  }
};
