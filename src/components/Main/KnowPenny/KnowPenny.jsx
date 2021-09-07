import React from 'react';
import penny from '../../../img/penny-4.jpg';

export default function KnowPenny() {
    return (
        <section className="know-penny">

            <div className="know-penny__card">
                <img src={penny} alt="Penny" className="know-penny__card-photo" />
                <div className="know-penny__card-text-box">
                    <h2 className="heading-2 text-align-center">Conoce a Penny</h2>
                    <p className="know-penny__card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus quaerat mollitia atque eaque quasi itaque vero, at distinctio esse, odio magni molestiae laborum nam? Obcaecati dolore ex voluptatem unde!
                    </p>
                </div>
            </div>
        </section>
    )
}
