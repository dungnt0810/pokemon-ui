import classNames from 'classnames/bind';
import styles from './CardDetail.module.scss';
import Type from '../Type';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DetailWrapper from '../DetailWrapper';

const cx = classNames.bind(styles);
const STATS = {
    hp: ['Hp', '#59cc5e'],
    attack: ['Atk', '#f7db57'],
    defense: ['Def', '#ed7b1a'],
    'special-attack': ['SpA', '#54b3f0'],
    'special-defense': ['SpD', '#aa68f5'],
    speed: ['SPD', '#ee6bcd'],
};

function Card({ pokeId }) {
    const [poke, setPoke] = useState(null);

    useEffect(() => {
        // fetch data
        axios
            .get('https://pokeapi.co/api/v2/pokemon/' + pokeId)
            .then(function (response) {
                setPoke(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [pokeId]);

    if (!poke) return null;

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
            <div className={cx('grid-layout')}>
                <div className={cx('abilities-title')}>Abilities</div>
                <div className={cx('abilities')}>
                    {poke.abilities.map((item, index) => (
                        <DetailWrapper data={item.ability.name} key={index} />
                    ))}
                </div>
                <div className={cx('height')}>Height: {poke.height}</div>
                <div className={cx('weight')}>Weight: {poke.weight}</div>
                <div className={cx('stats-title')}>Stats</div>
                <div className={cx('stats')}>
                    {poke.stats.map((item, index) => (
                        <div className={cx('stat')} key={index}>
                            <div className={cx('title')} style={{ color: STATS[item.stat.name][1] }}>
                                {STATS[item.stat.name][0]}
                            </div>
                            <div className={cx('value')}>{item.base_stat}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
