import classNames from 'classnames/bind';
import styles from './ActionMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faCircleHalfStroke,
    faRotateRight,
    faRulerVertical,
    faWeightHanging,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleDot, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import Button from './Button';
import { useState } from 'react';

const cx = classNames.bind(styles);
const ASC_CONDITIONS = [
    {
        icon: faCircleDot,
        title: 'Type',
    },
    {
        icon: faCircleHalfStroke,
        title: 'Weakness',
    },
    {
        icon: faLightbulb,
        title: 'Ability',
    },
    {
        icon: faRulerVertical,
        title: 'Height',
    },
    {
        icon: faWeightHanging,
        title: 'Weight',
    },
    {
        icon: faRotateRight,
        title: '',
        classbtn: 'reset',
    },
];
const MAX_PKM = 1302;

function ActionMenu({ onChangeFrom, onChangeTo, updateValues }) {
    const [from, setFrom] = useState(1);
    const [to, setTo] = useState(6);

    const handleOnClick = () => {
        const fromValue = document.getElementById('from').value;
        const toValue = document.getElementById('to').value;

        setTo(toValue);
        updateValues(fromValue, toValue);
    };

    return (
        <div className={cx('action-menu')}>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <span>Ascending</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div className={cx('limit')}>
                    <label htmlFor="from">from</label>
                    <input
                        id="from"
                        type="number"
                        value={from}
                        min={1}
                        max={MAX_PKM}
                        onChange={(e) => setFrom(e.target.value)}
                    />
                    <label htmlFor="to">to</label>
                    <input
                        id="to"
                        type="number"
                        value={to}
                        min={1}
                        max={MAX_PKM}
                        onChange={(e) => setTo(e.target.value)}
                    />
                </div>
                <button className={cx('apply-btn')} onClick={handleOnClick}>
                    Apply
                </button>
            </div>
            <div className={cx('ascending-condition')}>
                {ASC_CONDITIONS.map((item, index) => (
                    <Button title={item.title} inputIcon={item.icon} className={item.classbtn} key={index} />
                ))}
            </div>
        </div>
    );
}

export default ActionMenu;
