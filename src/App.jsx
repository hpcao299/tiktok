import { Routes } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import { privateRoutes, publicRoutes } from './routes';
import { renderRoutes } from './utils';

function App() {
    return (
        <div className="app">
            <GlobalStyles>
                <Routes>
                    {renderRoutes(publicRoutes)}
                    {renderRoutes(privateRoutes)}
                </Routes>
            </GlobalStyles>
        </div>
    );
}

export default App;
