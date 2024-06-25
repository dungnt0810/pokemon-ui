import classNames from 'classnames/bind';
import styles from './DetailWrapper.module.scss';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function DetailWrapper({ children, data, className, primary, outline, hidden, circle, small, large, ...props }) {
    const classes = cx('detail-wrapper', {
        [className]: className,
        primary,
        outline,
        hidden,
        circle,
        small,
        large,
    });

    return (
        <div className={classes}>
            {data}
            {hidden && <FontAwesomeIcon icon={faEyeSlash} />}
        </div>
    );
}

export default DetailWrapper;
