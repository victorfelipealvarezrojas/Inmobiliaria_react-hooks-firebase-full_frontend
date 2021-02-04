import React from 'react';

//material-ui 
import Button from '@material-ui/core/Button';

const ListaInmuebles = () => {
    return (
        <div>
            <Button
                variant="contained"
                color="primary"
            >
                Color Primario
            </Button>
            <Button
                color="secondary"
            >
                Color Secundario
            </Button>
        </div>
    );
};

export default ListaInmuebles;