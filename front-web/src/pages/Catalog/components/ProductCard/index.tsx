import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg';
import './styles.scss';

const ProductCard = () => {
    return(
        <div className="card-base border-radius-10 product-card" >
            <ProductImage />
            <div className="product-info" >
                <h6 className="product-name" >Computador Desktop - Intel Core i7</h6>
            </div>
            <div className="product-price-container" >
                <span className="product-currency" >R$</span>
                <h6 className="product-price" >2.779,00</h6>
            </div>
        </div>
    )
}

export default ProductCard;