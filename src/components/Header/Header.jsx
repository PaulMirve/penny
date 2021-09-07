import React from 'react';
import happy_penny from '../../img/happy penny.png'

export default function Header() {
    return (
        <header class="header">
            <div class="header__main">
                <h1 class="heading-1 heading-1--light">Penny</h1>
            </div>
            <img src={happy_penny} alt="Penny" class="header__photo" />
        </header>
    )
}
