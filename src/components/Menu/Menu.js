import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: images.pokeball,
        title: 'Home',
        url: '/home',
    },
    {
        icon: images.pokeball,
        title: 'Pokedex',
        url: '/pokedex',
    },
    {
        icon: images.pokeball,
        title: 'Videogames',
        url: '/videogames',
    },
    {
        icon: images.pokeball,
        title: 'GCC Pokemon',
        url: '/gcc-pokemon',
    },
    {
        icon: images.pokeball,
        title: 'TV Pokemon',
        url: '/tv-pokemon',
    },
    {
        icon: images.pokeball,
        title: 'Play Pokemon',
        url: '/play-pokemon',
    },
    {
        icon: images.pokeball,
        title: 'News',
        url: '/news',
    },
];

function Menu() {
    return (
        <div className={cx('container')}>
            {MENU_ITEMS.map((item, index) => (
                <a href={item.url} className={cx('item')} key={index}>
                    <img src={item.icon} alt="icon" />
                    {item.title}
                </a>
            ))}
        </div>
    );
}

export default Menu;
