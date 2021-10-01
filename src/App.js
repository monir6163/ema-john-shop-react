import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Notfound from './Components/Notfound/Notfound';
import Orderreview from './Components/Orderreview/Orderreview';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Shop from './Components/Shop/Shop';

function App() {
    return (
        <div>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/shop">
                        <Shop></Shop>
                    </Route>
                    <Route exact path="/order-review">
                        <Orderreview></Orderreview>
                    </Route>
                    <Route exact path="/inventory">
                        <Inventory></Inventory>
                    </Route>
                    <Route exact path="/place-order">
                        <PlaceOrder></PlaceOrder>
                    </Route>
                    <Route exact path="*">
                        <Notfound></Notfound>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
export default App;