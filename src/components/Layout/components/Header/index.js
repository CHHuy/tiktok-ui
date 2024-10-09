import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-earth-asia" />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { type: 'languge', code: 'en', title: 'English' },
                { type: 'languge', code: 'vi', title: 'Việt Nam' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon="fa-regular fa-circle-question" />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon="fa-regular fa-keyboard" />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // Handle logic
    const handleChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}

                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accont and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon="fa-solid fa-spinner" />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>

                    <Menu items={MENU_ITEMS} onChange={handleChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
