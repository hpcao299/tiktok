import config from '~/config';

// Pages
import HomePage from '~/pages/Home';

const publicRoutes = [
    {
        path: config.routes.home,
        component: HomePage,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
