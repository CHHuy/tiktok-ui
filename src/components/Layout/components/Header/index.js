import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { CreatorTools, DarkMode, GetCoins, InboxIcon, Language, MessagesIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <CreatorTools />,
        title: 'Creator tools',
        to: '/creatortools',
    },
    {
        icon: <Language />,
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
        icon: <DarkMode />,
        title: 'Dark mode',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const USER_MENU = [
        {
            icon: <FontAwesomeIcon icon="fa-regular fa-user" />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <GetCoins />,
            title: 'Get Coins',
            to: '/getcoin',
        },
        ...MENU_ITEMS,

        {
            icon: <FontAwesomeIcon icon="fa-solid fa-gear" />,
            title: 'Settings',
            to: '/settings',
        },
        {
            icon: <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}

                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon="fa-solid fa-plus" />}>
                                Upload
                            </Button>
                            <Tippy delay={[0, 200]} content="Messages">
                                <button className={cx('action-btn')}>
                                    <MessagesIcon></MessagesIcon>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1d13ff4390ddbd0c1f2bb17e2d99996c.jpeg?lk3s=a5d48078&nonce=26224&refresh_token=85208037f8ee3d7792a72dd5011e434c&x-expires=1728835200&x-signature=rgkt1sfYG%2F4egx1wclewDOzDBbo%3D&shp=a5d48078&shcp=81f88b70"
                                className={cx('user-avatar')}
                                alt="User Menu"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
