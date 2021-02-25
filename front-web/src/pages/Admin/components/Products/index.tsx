import { Route, Switch } from "react-router-dom"
import List from "./List"

const Products = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/admin/products" >
                    <List />
                </Route>
                <Route path="/admin/products/create" >
                    <h1>Criar Produtos</h1>
                </Route>
                <Route path="/admin/products/:productId" >
                    <h1>Editar Produtos</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default Products;