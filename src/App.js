import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Orderreview from './Components/Orderreview/Orderreview';
import Orders from './Components/Orders/Orders';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Shipping from './Components/Shipping/Shipping';
import Shop from './Components/Shop/Shop';
import AuthProvider from './Context/AuthProvider';

function App() {
    return (
        <div>
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Shop></Shop>
                        </Route>
                        <Route exact path="/shop">
                            <Shop></Shop>
                        </Route>
                        <Route exact path="/order-review">
                            <Orderreview></Orderreview>
                        </Route>
                        <Route exact path="/inventory">
                            <Inventory></Inventory>
                        </Route>
                        <PrivateRoute exact path="/shipping">
                            <Shipping></Shipping>
                        </PrivateRoute>
                        <PrivateRoute exact path="/place-order">
                            <PlaceOrder></PlaceOrder>
                        </PrivateRoute>
                        <PrivateRoute exact path="/myOrders">
                            <Orders></Orders>
                        </PrivateRoute>
                        <Route exact path="/login">
                            <Login></Login>
                        </Route>
                        <Route exact path="/register">
                            <Register></Register>
                        </Route>
                        <Route exact path="*">
                            <Notfound></Notfound>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
};
export default App;