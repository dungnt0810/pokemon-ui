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

function ActionMenu() {
    return (
        <div className={cx('action-menu')}>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <span>Ascending</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div className={cx('limit')}>
                    <label htmlFor="from">from</label>
                    <input id="from" type="number" />
                    <label htmlFor="to">to</label>
                    <input id="to" type="number" />
                </div>
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
