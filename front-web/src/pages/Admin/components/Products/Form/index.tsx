import { makeRequest } from "core/utils/request";
import { useState } from "react";
import BaseForm from "../../BaseForm"

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        category: '1',
        price: '',
        description: ''
    });

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = {
            ...formData,
            imgUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$',
            categories: [{ id: formData.category }]
        }

        makeRequest({ method: 'POST', url: '/products', data: payload });
    }

    return (
        <form onSubmit={handleOnSubmit} >
            <BaseForm title={'CADASTRAR PRODUTO'}>
                <div className="row">
                    <div className="col-6">
                        <input
                            value={formData.name}
                            name="name"
                            type="text"
                            className="form-control my-5 mb-5"
                            placeholder="Nome do Produto"
                            onChange={handleOnChange}
                        />
                        <select value={formData.category} name="category" className="form-control mb-5" onChange={handleOnChange} >
                            <option value="1" >Livros</option>
                            <option value="3" >Computadores</option>
                            <option value="2" >Eletrônicos</option>
                        </select>
                        <input
                            value={formData.price}
                            name="price"
                            type="text"
                            className="form-control"
                            placeholder="Preço"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="col-6" >
                        <textarea
                            className="form-control"
                            onChange={handleOnChange}
                            value={formData.description}
                            name="description"
                            cols={30}
                            rows={10} />
                    </div>
                </div>

            </BaseForm>
        </form>
    );
}

export default Form;