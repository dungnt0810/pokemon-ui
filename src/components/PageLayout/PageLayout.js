import classNames from 'classnames/bind';
import styles from './PageLayout.module.scss';

import Menu from '~/components/Menu';
import SearchBar from '~/components/SearchBar';
import ActionMenu from '../ActionMenu';
import Card from '../Card';
import CardDetail from '../CardDetail';

const cx = classNames.bind(styles);

function PageLayout() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <Menu />
            </div>
            <div className={cx('content')}>
                <div className={cx('list-view')}>
                    <div className={cx('wrapper')}>
                        <SearchBar />
                    </div>
                    <ActionMenu />
                    <div className={cx('pokemon-list')}>
                        <Card pokeId={1} />
                        <Card pokeId={2} />
                        <Card pokeId={3} />
                        <Card pokeId={4} />
                        <Card pokeId={5} />
                        <Card pokeId={6} />
                        <Card pokeId={7} />
                        <Card pokeId={8} />
                        <Card pokeId={9} />
                        <Card pokeId={10} />
                    </div>
                </div>
                <div className={cx('detail')}>
                    <CardDetail pokeId={1} />
                </div>
            </div>
        </div>
    );
}

export default PageLayout;
