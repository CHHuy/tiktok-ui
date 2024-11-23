import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src="" alt="avatar" />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyen</strong>
                    <FontAwesomeIcon className={cx('check')} icon="fa-solid fa-circle-check" />
                </p>
                <p className={cx('name')}>Quoc Nguyen</p>
                <div className={cx('analytics')}>
                    <strong className={cx('value')}>6.7M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>6.7M </strong>
                    <span className={cx('label')}>Likes</span>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
