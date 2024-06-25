import classNames from 'classnames/bind';
import styles from './PageLayout.module.scss';

import Menu from '~/components/Menu';
import SearchBar from '~/components/SearchBar';
import ActionMenu from '../ActionMenu';
import Card from '../Card';
import CardDetail from '../CardDetail';
import { useState } from 'react';

const cx = classNames.bind(styles);

function PageLayout() {
    const [values, setValues] = useState({ from: 1, to: 6 });
    const [selectedPokeId, setSelectedPokeId] = useState(null);

    const updateValues = (from, to) => {
        setValues({ from, to });
    };

    const handleCardClick = (id) => {
        setSelectedPokeId(id);
    };

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
                    <ActionMenu updateValues={updateValues} />

                    <div className={cx('pokemon-list')}>
                        {Array.from(
                            { length: values.to - values.from + 1 },
                            (_, index) => parseInt(index) + parseInt(values.from),
                        ).map((index) => (
                            <Card key={index} pokeId={index} onClick={() => handleCardClick(index)} />
                        ))}
                    </div>
                </div>
                <div className={cx('detail')}>{selectedPokeId && <CardDetail pokeId={selectedPokeId} />}</div>
            </div>
        </div>
    );
}

export default PageLayout;
