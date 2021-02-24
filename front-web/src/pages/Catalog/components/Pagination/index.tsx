import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { generateList } from 'core/utils/list';
import './styles.scss';

type Props = {
    totalPages: number,
    activePage: number,
    onChange: (item: number) => void
}

const Pagination = ({ totalPages, activePage, onChange } : Props) => {
    const itens = generateList(totalPages);
    const previousClass = totalPages > 0 && activePage > 0 ? 'page-active' : 'page-inactive';
    const nextClass = (activePage + 1) < totalPages ? 'page-active' : 'page-inactive';

    return (
        <div className="pagination-container" >
            <ArrowIcon onClick={() => onChange(activePage - 1)} className={`pagination-previous ${previousClass}`} />
            {itens.map((item) => (
                <div onClick={() => onChange(item)} key={item} className={`pagination-item ${item === activePage && 'active'}`} >
                    {item + 1}
                </div>
            ))}
            
            <ArrowIcon onClick={() => onChange(activePage + 1)} className={`pagination-next ${nextClass}`} />
        </div>
    );
}

export default Pagination;