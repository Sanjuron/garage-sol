import React, {PureComponent} from 'react';
import Contact from "./Contact";


//npm i jspdf
import jsPDF from 'jspdf';


class pdfGenerator extends PureComponent{

    //initilisatiion du constructeur
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         title: "salut"
    //     }
    // }


    //jspdf generator function
    jsPdfGenerator = ({contracts})  => {
        const contractList = contracts.map(contract => {

        var doc = new jsPDF('p', 'pt');

        doc.text(20,20, "Contrat de location")
        

        doc.setFont('Time New Roman');

        doc.save("location.pdf");
        

    }

    //render fonction du component

    render() {

        return(
            <div>
            <button onClick={this.jsPdfGenerator}>Générer pdf</button>     
            {this.props.state}       
            </div>
        )
        }
            
}

export default pdfGenerator;