import './styles.scss';

type Props = {
    price: string;
}

const ProductPrice = ({ price }: Props) => {
    return (
        <div className="product-price-container" >
            <span className="product-currency" >R$</span>
            <h6 className="product-price" >{price}</h6>
        </div>
    );
}

export default ProductPrice;