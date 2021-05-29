import React from 'react';

import {Button, Card} from 'react-bootstrap'

class ComponentElement extends React.Component {
	constructor(){
		super()
		this.boutonsupprimer = this.boutonsupprimer.bind(this)
	}

	boutonsupprimer(){
		axios.post(`http://127.0.0.1:1235/user3`, {user:this.props.infos.user})
		.then(response => {
			if(response.status === 200){
				if (response.data.retour === "ok"){
					this.props.fonction_pour_re_render()
				}
			}
		})
			.catch(error => {console.log(error)})
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
				    <Button onClick={this.boutonsupprimer}>Supprimer</Button>
				  </Card.Body>
				</Card>
			</div>
		)
	}
}

export default ComponentElement;
