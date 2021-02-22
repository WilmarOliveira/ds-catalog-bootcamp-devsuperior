import ContentLoader from 'react-content-loader'
import { generateList } from 'core/utils/list'

const ProductCardLoader = () => {
    const load = generateList(3);

    return (
        <>
        {load.map((item) => (
            <ContentLoader 
                speed={1}
                width={250}
                height={335}
                viewBox="0 0 250 335"
                backgroundColor='#ECEBEB'
                foregroundColor='#D6D2D2'
            >
                <rect x="2" y="2" rx="11" ry="11" width="250" height="335" />
            </ContentLoader>
        ))}
        </>
    )
}

export default ProductCardLoader

