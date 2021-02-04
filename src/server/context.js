import React from 'react';

const FirebaseContext = React.createContext();

export default FirebaseContext;

//cuando cualquier componente quiera utilizar girebase, este complemento lo envolvera para que tenga acceso a sus propiedades y
//le entregara la propiedad  firebase={firebase}
export const consumerFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
)


