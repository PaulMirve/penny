import React from 'react';
import happy_penny from '../../img/happy penny.png'

export default function Header() {
    return (
        <header className="header">
            <div className="header__main">
                <h1 className="heading-1 heading-1--light">Penny</h1>
            </div>
            <img src={happy_penny} alt="Penny" className="header__photo" />
        </header>
    )
}
