import { useState } from 'react';
import LivroRequests from '../../fetch/LivroRequests';

function FormLivro() {
    const [formData, setFormData] = useState({
        titulo: '',
        autor: '',
        editora: '',
        anoPublicacao: '',
        isbn: '',
        numeroPaginas: ''
    });

    const handleChange = (nome: string, valor: string | string[]) => {
        setFormData({ ...formData, [nome]: valor });
    };

    const handleSubmit = async (formData: {
        titulo: string;
        autor: string;
        editora: string;
        anoPublicacao: string;
        isbn: string;
        numeroPaginas: string;
    }) => {
        const resposta = await LivroRequests.enviaFormularioLivro(JSON.stringify(formData));
        if (resposta) {
            alert('Livro cadastrado com sucesso.');
        } else {
            alert('Erro ao cadastrar livro.');
        }
    };

    return (
        <section>
            <h1>Cadastro de Livro</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(formData); }}>
                <label>
                    Título
                    <input
                        type="text"
                        name="titulo"
                        required
                        minLength={2}
                        onChange={(e) => handleChange("titulo", e.target.value)}
                    />
                </label>

                <label>
                    Autor
                    <input
                        type="text"
                        name="autor"
                        required
                        minLength={3}
                        onChange={(e) => handleChange("autor", e.target.value)}
                    />
                </label>

                <label>
                    Editora
                    <input
                        type="text"
                        name="editora"
                        required
                        minLength={3}
                        onChange={(e) => handleChange("editora", e.target.value)}
                    />
                </label>

                <label>
                    Ano de Publicação
                    <input
                        type="number"
                        name="anoPublicacao"
                        min={1000}
                        max={9999}
                        onChange={(e) => handleChange("anoPublicacao", e.target.value)}
                    />
                </label>

                <label>
                    ISBN
                    <input
                        type="text"
                        name="isbn"
                        required
                        minLength={10}
                        maxLength={13}
                        onChange={(e) => handleChange("isbn", e.target.value)}
                    />
                </label>

                <label>
                    Número de Páginas
                    <input
                        type="number"
                        name="numeroPaginas"
                        min={1}
                        onChange={(e) => handleChange("numeroPaginas", e.target.value)}
                    />
                </label>

                <input type="submit" value="CADASTRAR LIVRO" />
            </form>
        </section>
    );
}

export default FormLivro;