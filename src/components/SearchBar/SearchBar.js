import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {
        // Handle the search click event here
        console.log('Search query:', searchQuery);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input
                    type="text"
                    placeholder="Search pokemon"
                    spellCheck="false"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button className={cx('clear-btn')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                <button className={cx('search-btn')} onClick={handleSearchClick}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
