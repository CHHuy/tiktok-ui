//Layouts
import { HeaderOnly } from '~/Layout';

// Pages
import config from '~/config';
import Explore from '~/pages/Explore';
import Following from '~/pages/Following';
import Friends from '~/pages/Friends';
import Home from '~/pages/Home';
import Live from '~/pages/Live';
import Messages from '~/pages/Messages';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.nickname, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.live, component: Live },
    { path: config.routes.messages, component: Messages, layout: HeaderOnly },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
