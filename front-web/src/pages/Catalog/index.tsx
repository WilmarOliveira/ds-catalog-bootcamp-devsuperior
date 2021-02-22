import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import { makeRequest } from 'core/utils/request';
import { Link } from 'react-router-dom';
import './styles.scss';
import { ProductsResponse } from 'core/types/Product';
import ProductCardLoader from './components/Loaders/ProductCardLoader';
import Pagination from './components/Pagination';

const Catalog = () => {
    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 12
        }
        //Início do loading
        setIsLoading(true);
        makeRequest({ url:'/products', params })
            .then(response => setProductsResponse(response.data))
            .finally(() => {
                //Fim do loading
                setIsLoading(false);
            })
    }, [])

    return (
    <div className="catalog-container" >
        <h1 className="catalog-title" >Catálogo de Produtos</h1>
        <div className="catalog-products">
            {isLoading ?
                <ProductCardLoader />
                :
                productsResponse?.content.map((product) => (
                    <Link to={`/products/${product.id}`} key={product.id} >
                        <ProductCard product={product} />
                    </Link>
                ))
            }
        </div>
        <Pagination />
    </div>
);
}

export default Catalog;