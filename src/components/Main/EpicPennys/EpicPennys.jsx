import React, { useState, useEffect } from 'react';
import Penny from '../../../classes/EpicPenny';
import chevron_down from '../../../img/svg/chevron-down-outline.svg';
import chevron_up from '../../../img/svg/chevron-up-outline.svg';
import EpicPenny from './EpicPenny';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import { db } from '../../../firebase';

export default function EpicPennys() {
    const [vote, setVote] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isResultsOpen, setResultsOpen] = useState(false);
    const [pennys, setPennys] = useState([]);

    useEffect(() => {
        getPennys();
        if (localStorage.getItem('voted')) {
            setVote(localStorage.getItem('voted'));
        }
    }, [])

    const onVote = (vote) => {
        setVote(vote);
        setModalOpen(true);
        updateVotes(vote);
        getPennys();
        localStorage.setItem("voted", vote);
    };

    const updateVotes = async (penny) => {
        const query = await db.collection('Pennys').get();
        query.forEach(item => {
            if (item.data().title === penny) {
                db.collection("Pennys").doc(item.id).update({
                    'votes': item.data().votes + 1
                });
            }
        });
    };

    const getPennys = async () => {
        let pennys = [];
        const query = await db.collection('Pennys').get();
        query.forEach(penny => pennys.push(new Penny(penny.data().photo, penny.data().title, penny.data().description, penny.data().votes)));
        setPennys([...pennys.sort((a, b) => b.votes - a.votes)]);
    }

    return (
        <section className="epic-pennys">
            <h2 className="heading-2 text-align-center">Las 5 Pennys más épicas</h2>
            <p className="subtitle text-align-center mb-sm">Vota por la Penny más épica</p>
            <div className="epic-pennys__grid">
                {
                    pennys.map((penny, index) => {
                        return <EpicPenny key={index} disabled={vote !== null ? true : false} onVote={onVote} {...penny} />
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
                            pennys.map((penny, index) => {
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
