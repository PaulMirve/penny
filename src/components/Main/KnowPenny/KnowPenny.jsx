import React from 'react';
import penny from '../../../img/penny-4.jpg';
import penny_2 from '../../../img/penny-5.jpg';
import penny_3 from '../../../img/penny-6.jpg';

export default function KnowPenny() {
    return (
        <section className="know-penny">

            <div className="know-penny__card">
                <figure className="know-penny__card-frame">
                    <img src={penny} alt="Penny" className="know-penny__card-photo know-penny__card-photo--1" />
                    <img src={penny_2} alt="Penny" className="know-penny__card-photo know-penny__card-photo--2" />
                    <img src={penny_3} alt="Penny" className="know-penny__card-photo know-penny__card-photo--3" />
                </figure>

                <div className="know-penny__card-text-box">
                    <h2 className="heading-2 text-align-center">Conoce a Penny</h2>
                    <p className="know-penny__card-text">
                        Se trata de Penny Mancillas, paciente canino de 11 años de edad, con antecedentes de insuficiencia cardiaca tipo congestiva y ca de mama de 2 años de evolución, programada para procedimiento de sniffamiento el dia 7 de septiembre del presente año.
                        La paciente acude a humano para abrazo y se muestra molesta al notar que el procedimiento fue diferente. Al ser levantada, analiza su entorno y se queda pensativa unos segundos. Fascies en el void. La paciente a pesar de no verse molesta por el sniffamiento, decide agreder al personal medico exclamando "grr". Se cancela procedimiento por falta de cooperación de la paciente. Pronostico reservado a evolucion no exenta de complicaciones.
                    </p>
                </div>
            </div>
        </section>
    )
}
