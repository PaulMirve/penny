import React from 'react';
import penny_3 from '../img/penny-3.jpg';
import Button from './Button/Button';
import history from '../history';


export default function Error404() {
    return (
        <div className="error404">
            <div className="error404__container">
                <div className="error404__text">
                    <h1 className="error404__title">Lo sentimos, la página que ha intentado acceder no existe.</h1>
                    <Button onClick={() => history.push('/')} color="dark" >Volver a la página principal</Button>
                </div>
                <img src={penny_3} alt="Penny" className="error404__img" />
            </div>

        </div>
    )
}
