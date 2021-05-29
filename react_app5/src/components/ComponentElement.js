import React from 'react';

import {Button, Card} from 'react-bootstrap'

class ComponentElement extends React.Component {
	constructor(){
		super()
		this.boutonHandler = this.boutonHandler.bind(this)
		this.boutonHandler2 = this.boutonHandler2.bind(this)
	}

	boutonHandler(){
		console.log("bouton appuyé")
	}

	boutonHandler2(){
		console.log("autre bouton appuyé")
	}

	render() {
		return(
			<div className="App">
				<Card style={{ width: '18rem' }}>
				  <Card.Body>
				    <Card.Title>{this.props.infos.user}</Card.Title>
				    <Card.Text>
				      {this.props.infos.nom}
				    </Card.Text>
				    <Button onClick={this.boutonHandler2} variant="secondary">Editer</Button> <br />
				    <Button onClick={this.boutonHandler} variant="primary">Supprimer</Button>
				  </Card.Body>
				</Card>
			</div>
		)
	}
}

export default ComponentElement;
