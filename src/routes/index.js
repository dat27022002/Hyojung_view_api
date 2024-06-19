import Home from '~/pages/Home';
import Dailyrevenue from '~/pages/Dailyrevenue';
import Monthlyrevenue from '~/pages/Monthlyrevenue';
import Typerevenue from '~/pages/Typerevenue';
import About from '~/pages/About';
import config from '~/config';

import { DefautLayout } from '~/layout';

const publicRoutes = [
    { path: config.routes.HOME, element: Home, layout: null },
    { path: config.routes.DAILYREVENUE, element: Dailyrevenue, layout: DefautLayout },
    { path: config.routes.MONTHLYREVENUE, element: Monthlyrevenue, layout: DefautLayout },
    { path: config.routes.TYPEREVENUE, element: Typerevenue, layout: DefautLayout },
    { path: config.routes.ABOUT, element: About, layout: DefautLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
