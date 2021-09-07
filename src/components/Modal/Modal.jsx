import React, { useEffect } from 'react';

export default function Modal({ message, isOpen, seconds }) {

    useEffect(() => {
        if (isOpen) {
            document.getElementById('modal').classList.add("modal-open");
            setTimeout(() => {
                document.getElementById('modal').classList.remove("modal-open");
            },  seconds * 1000);
        }
    }, [isOpen]);

    return (
        <div id="modal" className="modal">
            {message}
        </div>
    )
}
