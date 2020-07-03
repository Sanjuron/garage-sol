import React, { Component } from 'react';

export default class Contact extends Component {
    state = {
        name: null,
        firstname: null,
        birthdate: null,
        car: null,
        startRent: null,
        endRent: null,
        contract: null,

    }    
    
        handleChange = e => {
          this.setState({
              [e.target.id]: e.target.value // setState permet de modifier le state

         })
        }
    
        handleSubmit = e => {
          e.preventDefault();
          this.props.addContract(this.state);

        }
    render() {
        return ( 
            <div className="contact-intel">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Nom :</label>
              <input type="text" name="name" id="name" placeholder="Nom" required onChange={this.handleChange}/>
              <label htmlFor="firstname">Prénom :</label>
              <input type="text" name="firstname" id="firstname" placeholder="Prénom" required onChange={this.handleChange}/>
              <label htmlFor="birthdate">Date de naissance :</label>
              <input type="text" name="birthdate" id="birthdate" placeholder="Date de naissance" required onChange={this.handleChange}/>
              <label htmlFor="car">Véhicule :</label>
              <input type="text" name="car" id="car" placeholder="Nom du véhicule" required onChange={this.handleChange}/>
              <label htmlFor="startRent">Début de la location :</label>
              <input type="text" name="startRent" id="startRent" placeholder="Date du début de location" required onChange={this.handleChange}/>
              <label htmlFor="endRent">Fin de la location :</label>
              <input type="text" name="endRent" id="endRent" placeholder="Fin de la location" required onChange={this.handleChange}/>
              <label htmlFor="contract">Contrat/Entretien/Formation :</label>
              <input type="text" name="contract" id="contract" placeholder="Type de contrat" required onChange={this.handleChange}/>
              <button >Valider</button>  
            </form> 
            </div>
         );
    }
}
 
