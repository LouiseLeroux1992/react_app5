import React from 'react';
import axios from 'axios';

import ComponentElement from './ComponentElement.js' 

import {Button} from 'react-bootstrap'

class PagePrincipale extends React.Component {
	constructor(){
		super()
		this.state={
			elements:[]
		}
		this.fonction_pour_re_render=this.fonction_pour_re_render.bind(this)
		this.ajouterHandler = this.ajouterHandler.bind(this)
	}
	componentDidMount(){
		axios.post(`http://127.0.0.1:1235/user2`, {})
			.then(response => {
				if(response.status === 200){
					if (response.data.retour === "ok"){
						this.setState({elements:response.data.valeurs})
					}
				}
			})
			.catch(error => {console.log(error)})
	}
	fonction_pour_re_render(){
		axios.post(`http://127.0.0.1:1235/user2`, {})
			.then(response => {
				if(response.status === 200){
					if (response.data.retour === "ok"){
						this.setState({elements:response.data.valeurs})
					}
				}
			})
			.catch(error => {console.log(error)})
		this.forceUpdate()
	}
	ajouterHandler(){
		console.log ("clic sur bouton ajouter")
		axios.post(`http://127.0.0.1:1235/user1`, {user:"LePapillon",nom:"Louise"})
			.then(response => {
				if(response.status === 200){
					if (response.data.retour === "ok"){
						this.fonction_pour_re_render()
					}
				}
			})
			.catch(error => {console.log(error)})
		}

	render() {
		const elems = this.state.elements
			.map((elem, i) =>  <ComponentElement infos={elem} />);
		return(
			<div className="App">
				{elems}
				<Button onClick={this.ajouterHandler}> Ajouter un utilisateur </Button> <br />
			</div>
		)
	}
}

export default PagePrincipale;
