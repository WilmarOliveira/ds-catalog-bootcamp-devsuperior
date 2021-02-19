import ContentLoader from 'react-content-loader'

const ProductCardLoader = () => {
    const load = [0, 1, 2];

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

