import React from 'react';

const Imagen = (props) => {

const {largeImageURL, likes, previewURL, tags, views } = props.imagen;

	return (
		<div className ="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
		<div className="card">
		<img src={previewURL} alt={tags} className= "card-img-top" />
		<div className="card-body">
		   <p className="cad-text">{likes} Me gusta </p>
		   <p className="cad-text">{views} vistas </p>
		   <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">ver</a>

		</div>
		</div>
		</div>
		)
}

export default Imagen;