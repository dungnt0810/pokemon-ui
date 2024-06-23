import classNames from 'classnames/bind';
import styles from './PageLayout.module.scss';

import Menu from '~/components/Menu';
import SearchBar from '~/components/SearchBar';
import ActionMenu from '../ActionMenu';

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
                    <div className={cx('pokemon-list')}>{/* Card grid view */}</div>
                </div>
                <div className={cx('detail')}>
                    <div className={cx('wrapper')}>
                        <SearchBar />
                        {/* Card detail view */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageLayout;
