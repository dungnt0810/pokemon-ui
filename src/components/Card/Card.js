import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import Type from '../Type';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Card.propTypes = {
    pokeId: PropTypes.number.isRequired,
    onClick: PropTypes.func,
};

const cx = classNames.bind(styles);
function Card({ pokeId, onClick }) {
    const [poke, setPoke] = useState(null);

    useEffect(() => {
        // fetch data
        axios
            .get('https://pokeapi.co/api/v2/pokemon/' + pokeId)
            .then(function (response) {
                setPoke(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [pokeId]);

    if (!poke) {
        return null;
    }

    return (
        <button className={cx('container')} onClick={onClick}>
            <img src={poke.sprites.front_default} alt="icon" />
            <div className={cx('id')}># {poke.id}</div>
            <div className={cx('name')}>{poke.name}</div>
            <div className={cx('types')}>
                {poke.types.map((item, index) => (
                    <Type data={item.type.name} key={index} />
                ))}
            </div>
        </button>
    );
}

export default Card;
