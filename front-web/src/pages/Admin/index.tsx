import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import './styles.scss';

const Admin = () => {
    return(
        <div className="admin-container" >
            <Navbar />
            <div className="admin-content" >
                <Switch>
                    <Route path="/admin/products" component={Products} />
                    <Route path="/admin/categories" >
                        <div>Categorias</div>
                    </Route>
                    <Route path="/admin/users" >
                        <div>Usuários</div>
                    </Route>
                </Switch>
            </div>
        </div>
        
    );
    
}

export default Admin;