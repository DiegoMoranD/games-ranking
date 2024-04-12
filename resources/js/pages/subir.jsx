import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM  from 'react-dom/client'

function Subir() {
    const [juegos, setJuegos] = useState([]);

    useEffect(() => {
        axios.get('/subir')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setJuegos(response.data);
                } else {
                    console.error('Data is not an array:', response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <section className='z-10 -mt-20 justify-center flex '>
            <ul>
                {juegos.map(juego => (
                    <li key={juego.id}>{juego.nombre}</li>
                ))}
            </ul>
        </section>
    );
}

export default Subir

