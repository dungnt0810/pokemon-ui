import classNames from 'classnames/bind';
import styles from './Type.module.scss';

const cx = classNames.bind(styles);
const types = {
    normal: '#A8A77A',
    fighting: '#C22E28',
    flying: '#A98FF3',
    poison: '#A33EA1',
    ground: '#E2BF65',
    rock: '#B6A136',
    bug: '#A6B91A',
    ghost: '#735797',
    steel: '#B7B7CE',
    fire: '#EE8130',
    water: '#6390F0',
    grass: '#7AC74C',
    electric: '#F7D02C',
    psychic: '#F95587',
    ice: '#96D9D6',
    dragon: '#6F35FC',
    dark: '#705746',
    fairy: '#D685AD',
    stellar: '#43b5a5',
    unknown: '#fff',
};
function Type({ data }) {
    if (!data) return null;
    return (
        <div className={cx('container')} style={{ backgroundColor: types[data] }}>
            <span className={cx('name')}>{data}</span>
        </div>
    );
}

export default Type;
