import ProductPrice from 'core/components/ProductPrice';
import { Product } from 'core/types/Product';
import './styles.scss';

type Props = {
    product: Product;
}

const ProductCard = ({ product }: Props) => {
    return(
        <div className="card-base border-radius-10 product-card" >
            <img className="product-card-image" src={product.imgUrl} alt={product.name} />
            <div className="product-info" >
                <h6 className="product-name" >{product.name}</h6>
            </div>
            <ProductPrice price={product.price} />
        </div>
    )
}

export default ProductCard;