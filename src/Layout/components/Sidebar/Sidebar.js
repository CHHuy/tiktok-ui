import classNames from 'classnames/bind';
import {
    ExploreActiveIcon,
    ExploreIcon,
    FollowingActiveIcon,
    FollowingIcon,
    FriendsActiveIcon,
    FriendsIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    MessagesIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon className={cx('icon-size-sm')} />}
                    activeIcon={<FollowingActiveIcon className={cx('icon-size-sm')} />}
                ></MenuItem>
                <MenuItem
                    title="Friends"
                    to={config.routes.friends}
                    icon={<FriendsIcon />}
                    activeIcon={<FriendsActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Messages"
                    to={config.routes.messages}
                    icon={<MessagesIcon className={cx('icon-size-sm')} />}
                ></MenuItem>
                <MenuItem
                    title="Profile"
                    to={config.routes.profile}
                    icon={<Image src="" className={cx('user-avatar')} alt="User Menu" />}
                ></MenuItem>
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
