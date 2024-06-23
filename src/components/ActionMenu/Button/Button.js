import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Button({ title, inputIcon, onClick, className, primary, small, large, ...passProps }) {
    const isResetBtn = title !== '';

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        small,
        large,
    });

    return (
        <button className={classes}>
            <FontAwesomeIcon className={cx('icon')} icon={inputIcon} />
            {title}
            {isResetBtn && <FontAwesomeIcon className={cx('asc')} icon={faAngleDown} />}
            {/* {isResetBtn && <FontAwesomeIcon icon={faAngleUp} />} */}
        </button>
    );
}

export default Button;
