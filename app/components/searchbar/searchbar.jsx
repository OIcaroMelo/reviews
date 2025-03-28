import './searchbar.css'
import { useRef, useEffect,useState } from 'react';

function SearchBar({ onSearch }){
    
    /*
    const inputRef = useRef(null);

    useEffect(() => {
        const lupa = document.getElementById('lupa');
        const handleClick = () => {
            const searchValue = inputRef.current.value.trim(); // Obtém o valor do input
            onSearch(searchValue); // Chama a função de busca
        };

        lupa.addEventListener('click', handleClick);

        // Limpeza do event listener
        return () => {
            lupa.removeEventListener('click', handleClick);
        };
    }, [onSearch]);

    */
    
    return (
        <div id='searchbar'>
            <input type="text" id='searchInput' placeholder='Pesquisar'/>
            <svg id='lupa' version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="70px" height="40px" viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#F9A826" stroke="none">
                <path d="M2085 4474 c-709 -76 -1277 -596 -1417 -1297 -32 -161 -32 -433 0
                -594 130 -650 619 -1140 1272 -1274 161 -33 433 -34 595 -1 242 48 455 141
                644 280 l74 54 496 -495 c436 -436 501 -496 534 -502 60 -11 107 3 148 44 41
                41 55 88 44 149 -6 32 -66 97 -501 533 l-495 496 56 79 c142 198 229 398 277
                639 32 158 32 432 0 592 -129 648 -623 1144 -1267 1273 -98 20 -368 34 -460
                24z m425 -343 c251 -57 446 -165 631 -350 186 -185 300 -394 355 -651 26 -119
                26 -381 0 -500 -55 -257 -169 -466 -355 -651 -185 -186 -394 -299 -651 -355
                -126 -27 -392 -25 -516 4 -259 61 -452 167 -635 351 -186 185 -300 394 -355
                651 -26 119 -26 381 0 500 56 259 167 462 355 651 182 183 383 294 630 349
                121 26 148 29 311 24 95 -2 174 -10 230 -23z"/>
                </g>
            </svg>
        </div>
    )
}

export default SearchBar;