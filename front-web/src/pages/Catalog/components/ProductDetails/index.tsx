import { useEffect, useState } from 'react';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { Link, useParams } from "react-router-dom";
import './styles.scss';
import ProductPrice from 'core/components/ProductPrice';
import { makeRequest } from 'core/utils/request';
import { Product } from 'core/types/Product';
import ProductDescriptionLoader from '../Loaders/ProductDescriptionLoader';
import ProductInfoLoader from '../Loaders/ProductInfoLoader';

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ParamsType>();
    const [product, setProduct] = useState<Product>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `/products/${productId}` })
            .then((response) => setProduct(response.data))
            .finally(() => setIsLoading(false));
    }, [productId])

    return (
        <div className="product-details-container">
            <div className="card-base border-radius-20 product-details" >
                <Link to="/products" className="product-details-goback" >
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback" >voltar</h1>
                </Link>
                <div className="row" >
                    <div className="col-6 pr-5" >
                        {isLoading ?
                            <ProductInfoLoader />
                            :
                            <>
                                <div className="product-details-card text-center" >
                                    <img src={product?.imgUrl} alt={product?.name} />
                                </div>
                                <h1 className="product-details-name" >{product?.name}</h1>
                                {product?.price && <ProductPrice price={product?.price} />}
                            </>
                        }
                    </div>
                    <div className="col-6 product-details-card" >
                        {isLoading ?
                            <ProductDescriptionLoader />
                            :
                            <>
                                <h1 className="product-details-title" >Descrição do Produto</h1>
                                <p className="product-details-text" >
                                    {product?.description}
                                </p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;