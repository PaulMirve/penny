import React, { useState, useEffect } from 'react';
import Penny from '../../../classes/EpicPenny';
import penny_trocona from '../../../img/penny-trocona.jpg';
import penny_void from '../../../img/penny-void.jpg';
import penny_santa_claus from '../../../img/penny-santa-claus.jpg';
import penny_hoodie from '../../../img/penny-hoodie.jpg';
import penny_cojin from '../../../img/penny-cojin.jpg';
import EpicPenny from './EpicPenny';
import Modal from '../../Modal/Modal';

const epicPennys = [
    new Penny(penny_trocona, 'Penny en la trocona', 'Penny que sacó su licencia de conducir y viaja por el mundo en su trocona.'),
    new Penny(penny_void, 'Penny mirando al void', 'Esta Penny esta mirando al void, ha visto cosas que no debió haber visto y ahora esta reflexionando'),
    new Penny(penny_santa_claus, 'Penny Santa Claus', 'Esta Penny ha sido invaida por el espiritu navideño y se ha disfrazado de Santa Claus.'),
    new Penny(penny_cojin, 'Penny arriba del cojín', 'Esta Penny escalo hasta el tope del cojín y se acosto a reposar despues de un día difícil.'),
    new Penny(penny_hoodie, 'Penny con hoodie', 'El hip hop a influenciado a esta Penny y trae una hoodie.'),
];

export default function EpicPennys() {
    const [vote, setVote] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('voted')) {
            setVote(localStorage.getItem('voted'));
        }
    }, [vote])

    const onVote = (vote) => {
        setVote(vote);
        setModalOpen(true);
        localStorage.setItem("voted", vote);
    };

    return (
        <section className="epic-pennys">
            <h2 className="heading-2 text-align-center">Las 5 Pennys más épicas</h2>
            <p className="subtitle text-align-center mb-sm">Vota por la Penny más épica</p>
            <div className="epic-pennys__grid">
                {
                    epicPennys.map((penny, index) => {
                        return <EpicPenny key={index} disabled={vote !== null ? true : false} onVote={onVote} img={penny.img} title={penny.title} description={penny.description} />
                    })
                }
            </div>
            <Modal message="Gracias por votar" isOpen={isModalOpen} seconds={5} />
        </section>
    )
}
