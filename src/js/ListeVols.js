import React from 'react';
import TableContainer from './TableContainer';
import Head from './Head';

const ListeVols = props => {
    return(
        <div className="containerListe">

            <Head title="VOLS"/>
            <TableContainer/>
            
        </div>
    
    )
}

export default ListeVols;