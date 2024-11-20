import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1d13ff4390ddbd0c1f2bb17e2d99996c.jpeg?lk3s=a5d48078&nonce=26545&refresh_token=406295565a1fae1180827adca89328cd&x-expires=1732298400&x-signature=sV%2F2WnStfylyy20qYzJxMntxGBg%3D&shp=a5d48078&shcp=81f88b70"
                alt="avatar"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyen</strong>
                    <FontAwesomeIcon className={cx('check')} icon="fa-solid fa-circle-check" />
                </p>
                <p className={cx('name')}>Quoc Nguyen</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
