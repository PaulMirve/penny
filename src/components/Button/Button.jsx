import React from 'react'

export default function Buttons({ children, onClick = () => { }, disabled, fullwidth, className }) {
    return (
        <button disabled={disabled} onClick={onClick} className={`btn ${fullwidth ? 'fullwidth' : ''} ${className}`}>
            {children}
        </button>
    )
}
