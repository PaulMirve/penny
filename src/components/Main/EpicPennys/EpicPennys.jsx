import React, { useState, useEffect } from 'react';
import Penny from '../../../classes/EpicPenny';
import penny_trocona from '../../../img/penny-trocona.jpg';
import penny_void from '../../../img/penny-void.jpg';
import penny_santa_claus from '../../../img/penny-santa-claus.jpg';
import penny_hoodie from '../../../img/penny-hoodie.jpg';
import penny_cojin from '../../../img/penny-cojin.jpg';
import chevron_down from '../../../img/svg/chevron-down-outline.svg';
import chevron_up from '../../../img/svg/chevron-up-outline.svg';
import EpicPenny from './EpicPenny';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';

const epicPennys = [
    new Penny(penny_trocona, 'Penny en la trocona', 'Penny que sacó su licencia de conducir y viaja por el mundo en su trocona.', 5),
    new Penny(penny_void, 'Penny mirando al void', 'Esta Penny esta mirando al void, ha visto cosas que no debió haber visto y ahora esta reflexionando', 2),
    new Penny(penny_santa_claus, 'Penny Santa Claus', 'Esta Penny ha sido invaida por el espiritu navideño y se ha disfrazado de Santa Claus.', 10),
    new Penny(penny_cojin, 'Penny arriba del cojín', 'Esta Penny escalo hasta el tope del cojín y se acosto a reposar despues de un día difícil.', 8),
    new Penny(penny_hoodie, 'Penny con hoodie', 'El hip hop a influenciado a esta Penny y trae una hoodie.', 3),
];

export default function EpicPennys() {
    const [vote, setVote] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isResultsOpen, setResultsOpen] = useState(false);

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
            <div className="epic-pennys__results">
                <Button
                    onClick={() => setResultsOpen(!isResultsOpen)}
                    hasIcon
                    color='dark'
                    className="mt-md mb-md epic-pennys__results-btn">
                    Conocer los resultados
                    {isResultsOpen ? <img className="btn__icon" src={chevron_up} alt="Chevron up" /> : <img className="btn__icon" src={chevron_down} alt="Chevron down" />}
                </Button>
                <div className={`epic-pennys__results-table ${isResultsOpen ? 'epic-pennys__results-table--open' : ''}`}>
                    <div className="epic-pennys__results-table-headers">
                        <h5>Penny</h5>
                        <h5>Votos</h5>
                    </div>
                    <div className="epic-pennys__results-table-content">
                        {
                            epicPennys.map((penny, index) => {
                                return (
                                    <div key={index}>
                                        <p>{penny.title}</p>
                                        <p>{penny.votes} votos</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <Modal message="Gracias por votar" isOpen={isModalOpen} seconds={5} />
        </section>
    )
}
