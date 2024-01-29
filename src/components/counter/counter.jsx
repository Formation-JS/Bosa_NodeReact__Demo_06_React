import { useState } from 'react';

function Counter() {

    // Utilisation du hook d'état pour créer un state
    const [count, setCount] =  useState(0);

    // La fonction executer par le bouton "+ 1"
    const handleIncr = function() {
        setCount(count => count + 1);
    };

    // La fonction executer par le bouton "Reset"
    const handleReset = function() {
        setCount(0);
    };

    // La synthaxe <> ... </> est un fragment React 
    // Elle permet d'evité les balise html inutile
    return (
        <>
            <h2>Compteur : {count}</h2>
            <div>
                <button onClick={handleIncr}>+ 1</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    )
};

export default Counter;