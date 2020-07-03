import React from 'react';

const ContractList = ({contracts, deleteContract}) => {
    const contractList = contracts.map(contract => {
        return (
            <div className="contract" key={contract.id}>
                <button className="delete" onClick={() => {deleteContract(contract.id)}}>X</button>
                <h2>Contrat de Location</h2>
                <div className="contract__frame">
                <p> Il est convenu que M./Mme <strong>{contract.name} {contract.firstname} </strong>né/née le <strong>{contract.birthdate}</strong>  prenne en
                location le véhicule <strong>{contract.car}</strong>. La location débutera le <strong>{contract.startRent}</strong> et s'achèvera le <strong>{contract.endRent}</strong>. M./Mme <strong>{contract.name} {contract.firstname}</strong> a présenté
                un document établissant la nécessité de devoir se déplacer en voiture de type : <strong>{contract.contract}</strong>.</p>
                <p className="sign">SIGNATURE :</p>
                </div>
                {/* puisque deleteContract a des parenthèses, elle est automatiquement invoquée, il faut donc l'inclure ds une fonction anonyme pourqu'elle ne se déclenche qu'au clic */}
            </div>
        )
    })

    return(
        <div className="contract-list">
            {contractList}
        </div>
    )

}


export default ContractList;