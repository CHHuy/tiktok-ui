import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './DefaultLayout.module.scss';

import Header from '~/Layout/components/Header';
import Sidebar from '~/Layout/components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
