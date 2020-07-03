import React, { Component } from 'react';
import './App.css';
import Contact from "./Contact";
import ContractList from "./ContractList";
import PdfGenerator from "./Pdf2";

class App extends Component {

  state = {
    contracts : [], //vide car il doit être rempli uniquement lorsqu'un formulaire est soumis
}
  
  addContract = (newcontract) => { // on passe cette fonction en props dans Contact pour pouvoir l'appeler dans le composant
    newcontract.id = Math.random(); //assigne à chaque nouveau contrat un id
    let contracts = [...this.state.contracts, newcontract]; // spread operator pour ajouter un nouveau contrat dans le tableau contract 
    this.setState({
      contracts : contracts // le nouveau contracts remplace le state.contracts
    })
  }

  deleteContract = (id) => {
    let contracts = this.state.contracts.filter(contract => {
      return contract.id !== id
    }); //filter est une méthode non desctructrice, elle n'altère pas le state
    this.setState({
      contracts: contracts 
    })
  }

  
  render() { 
    return (
      <div>
        <h1>Garage Solidaire du Bassin Minier</h1>
        <div className="flex">
        <Contact addContract={this.addContract} /> 
        <ContractList deleteContract={this.deleteContract} contracts={this.state.contracts}/>
        <PdfGenerator />
        </div>
      </div>
      );
  }
}
 
export default App;