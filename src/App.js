import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import DefaultLayout from '~/components/layouts/DefaultLayout';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <DefaultLayout>
                                <Home />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/following"
                        element={
                            <DefaultLayout>
                                <Following />
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
