import React from 'react';
import Button from '../../Button/Button';

export default function EpicPenny({ img, title, description, onVote = () => { }, disabled }) {
    return (
        <div className="epic-penny">
            <img src={img} alt="Penny trocona" className="epic-penny__img" />
            <div className="epic-penny__title-box">
                {title}
            </div>
            <p className="epic-penny__description">{description}</p>
            <Button onClick={() => onVote(title)} disabled={disabled} className="btn fullwidth epic-penny__button">Votar</Button>
        </div>
    )
}
