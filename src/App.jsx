import { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoria_id: '',
      categorias: [],
      productos: [],
    };
  }

  componentDidMount() {
    this.buscarCategorias();
    this.buscarProductos();
  }

  buscarCategorias = () => {
    const url = "https://productos.ctpoba.edu.ar/api/categorias";
    axios.get(url)
      .then((resp) => {
        this.setState({ categorias: resp.data.categorias });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  buscarProductos = () => {
    const url = "https://productos.ctpoba.edu.ar/api/productos";
    axios.get(url)
      .then((resp) => {
        this.setState({ productos: resp.data.productos });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <span>APP</span>
        <input 
          type="button" 
          value="Buscar Categoría"
          onClick={this.buscarCategorias} 
        />
        <input 
          type="button" 
          value="Buscar Producto"
          onClick={this.buscarProductos} 
        />
        <select 
          value={this.state.categoria_id}
          onChange={(e) => this.setState({ categoria_id: e.target.value })}
        >
          <option value="">Seleccione una categoría</option>
          {
            this.state.categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))
          }
        </select>
      </div>
    );
  }
}
