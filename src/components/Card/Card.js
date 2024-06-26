import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import Type from '../Type';
import axios from 'axios';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Card({ pokeId }) {
    const [poke, setPoke] = useState(null);
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokeId;

    useEffect(() => {
        // fetch data
        axios
            .get(url)
            .then(function (response) {
                setPoke(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    if (!poke) {
        return null;
    }

    return (
        <div className={cx('container')}>
            <img src={poke.sprites.front_default} alt="icon" />
            <div className={cx('id')}># {poke.id}</div>
            <div className={cx('name')}>{poke.name}</div>
            <div className={cx('types')}>
                {poke.types.map((item, index) => (
                    <Type data={item.type.name} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Card;
