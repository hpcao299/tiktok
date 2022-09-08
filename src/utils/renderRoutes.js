import { Route } from 'react-router-dom';
import { DefaultLayout } from '~/layouts';

export function renderRoutes(routes) {
    return routes.map((route, index) => {
        const Page = route.component;
        let Layout = DefaultLayout;

        if (route.layout) {
            Layout = route.layout;
        }

        return (
            <Route
                key={index}
                path={route.path}
                element={
                    <Layout {...route.props}>
                        <Page />
                    </Layout>
                }
            />
        );
    });
}
