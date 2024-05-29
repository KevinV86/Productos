import { Component } from 'react'
import reactLogo from '/assents/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      categoria_id: "",
      categorias:[],
      productos: []
    }
  }

  buscarCategorias(){
    const url = "https://10.0.4.103:3000/api/categorias"
    axios.get(url)
    .then((resp) => {
      console.log(resp.data.categoria)
      this.setState({categorias: resp.data.categorias})
    })
  }

    buscarProductos(categoria_id){
      const url = "https://10.0.4.1003/api/productos"
      const config ={
        params:{categoria_id}
      }
      axios.get(url, config)
      .then((resp) => {
        console.log(resp.data.productos)
        this.setState({productos: resp.data.productos})
      })
  }

render(){
  return (
  <div className="App">
  <span>
    APP
  </span>
  <input
    type="button" 
    value="Buscar"
    onClick={() => this.buscarCategorias()}
    />
    <select 
    value={this.state.categoria_id}
    onChange={(e) => this.setState({categoria_id: e.target.value})}
    > 
    {this.state.categorias.map((cat, index)=>
      <option key={cat.id} value={cat.id}>
        {cat.nombre}
      </option>
    )}
    </select>
    <h3>{this.state.categoria_id}</h3>
    <input
    type="button"
    value="buscar productos"
    onClick={() => this.buscarProductos(this.state.categorias_id)}
    />
    {this.state.productos.map((prod, i) =>
      <span key={prod.id}>{prod.nombre}</span>
    )}
  </div>
  )}
}