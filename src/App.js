import React, {Component} from 'react';
import './bootstrap.min.css';
import Buscador from './componentes/Buscador.js'
import Resultado from './componentes/Resultado.js'

class App extends Component {

	state = {
		termino:'',
		imagenes:[],
		pagina: ''
	}

	scroll = () =>{

		const elemento = document.querySelector('.jumbotron');
		elemento.scrollIntoView('instant','start');
	}

    paginaAnterior = () =>{
       //leemos la página actual
    let pagina = this.state.pagina;

    //Cuando la página es 1 no se puede devolver

    if(pagina === 1) return null;
    
    //restamos 1 a la página actual
    pagina -- ;

    //Agregamos la actualización al state
    this.setState({pagina},()=>{
    	this.consultarApi();
    	this.scroll();
    });

    //console.log(pagina);
    }
    paginaSiguiente = () =>{
    
    //leemos la página actual
    let pagina = this.state.pagina;
    
    //sumamos 1 a la página actual
    pagina ++ ;

    //Agregamos la actualización al state
    this.setState({pagina},()=>{
    	this.consultarApi();
    	this.scroll();
    });
    

    //console.log(pagina);
    }

  
	consultarApi = () =>{
        const termino = this.state.termino;
        const pagina = this.state.pagina;
		const url = `https://pixabay.com/api/?key=14216950-90c95353607fa86c0befbe27e&q=${termino}&per_page=30&page=${pagina}`;
		//console.log(url);

		fetch(url)
		   .then(respuesta => respuesta.json())
		   .then(resultado => this.setState({imagenes:resultado.hits}))	
	}

	datosBusqueda = (termino) => {
		
        //función que toma los datos del placeholder de datosBusqueda

		this.setState({
			termino:termino,
			pagina: 1
		},()=>{
			this.consultarApi();
		}) 
		
	}


render() {
  return (
    <div className="app container">
    <div className="jumbotron">
    <p className="lead text-center">Imágenes Pro</p>
     <Buscador
    datosBusqueda={this.datosBusqueda}
     />
    </div>
    <div className="row justify-content-center">
    <Resultado 
    imagenes={this.state.imagenes}
    paginaAnterior={this.paginaAnterior}
    paginaSiguiente={this.paginaSiguiente}
    />
     </div>
    </div>
  );
 }
}

export default App;
