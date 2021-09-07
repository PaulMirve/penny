import React from 'react'
import KnowPenny from './KnowPenny/KnowPenny';
import EpicPennys from './EpicPennys/EpicPennys';

export default function Main() {
    return (
        <main style={{ marginBottom: '15rem' }}>
            <KnowPenny />
            <EpicPennys />
        </main>
    )
}
