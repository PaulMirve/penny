import React from 'react'

export default function EpicPenny({ img, title, description }) {
    return (
        <div className="epic-penny">
            <img src={img} alt="Penny trocona" className="epic-penny__img" />
            <div className="epic-penny__title-box">
                {title}
            </div>
            <p className="epic-penny__description">{description}</p>
            <button className="btn fullwidth epic-penny__button">Votar</button>
        </div>
    )
}
