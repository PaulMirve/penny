import React from 'react'

export default function Button({ children, onClick = () => { }, disabled, fullwidth, className, color, hasIcon }) {

    const getColor = () => {
        switch (color) {
            case 'dark':
                return 'btn--dark';
            default:
                return '';
        }
    }

    return (
        <button disabled={disabled} onClick={onClick} className={`btn ${fullwidth ? 'fullwidth' : ''} ${className} ${getColor()} ${hasIcon ? 'btn--icon' : ''}`}>
            {children}
        </button>
    )
}
