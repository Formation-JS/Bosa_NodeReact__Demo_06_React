import PropTypes from 'prop-types';
import clsx from 'clsx';

import style from './hello-world.module.css';

// ↓ Composant React
function HelloWorld({ firstname, lastname, gender }) {

    let prefix;
    switch (gender) {
        case 'F':
            prefix = 'Madame';
            break;
        case 'M':
            prefix = 'Monsieur';
            break;
    };

    const clsWelcome = clsx({
        [style.welcome]: true,
        [style.colorM]: gender === 'M',
        [style.colorF]: gender === 'F'
    });

    return (
        <div>
            <h1 className={clsWelcome}>Bonjour {prefix} {firstname} {lastname}</h1>
            <p className={style['title-desc']}>Bienvenue sur la demo React !</p>
        </div>
    );
}

// ↓ Valeur par defaut (Optionnel)
HelloWorld.defaultProps = {
    gender: 'X'
};

// ↓ Typage des props (Optionnel)
//   PropTypes -> Affiche un message en runtime, sans bloqué l'app
HelloWorld.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(['X', 'F', 'M'])
};

export default HelloWorld;