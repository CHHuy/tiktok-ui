import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/47f7a94191599ff8d3a50522fb74828a~c5_300x300.webp?lk3s=a5d48078&nonce=84366&refresh_token=fc75f04b7755247fe8e164ee845e6990&x-expires=1727197200&x-signature=iCPr8yXNPOAYEtRFDr5aN5iDNgo%3D&shp=a5d48078&shcp=c1333099"
                alt="Mai"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Mai</span>
                    <FontAwesomeIcon className={cx('check')} icon="fa-solid fa-circle-check" />
                </h4>
                <span className={cx('username')}>Mai</span>
            </div>
        </div>
    );
}

export default AccountItem;
