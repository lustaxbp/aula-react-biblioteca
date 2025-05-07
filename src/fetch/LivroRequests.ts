import { SERVER_CFG } from '../appConfig';
import LivroDTO from '../interfaces/LivroInterface';

/**
 * Classe com a coleção de funções que farão as requisições à API
 * Esta classe representa apenas as requisições da entidade Livro
 */
class LivroRequests {

    private serverURL: string;            // Endereço do servidor
    private routeListaLivros: string;     // Rota para listagem de livros
    private routeCadastraLivro: string;   // Rota para cadastro de novo livro

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;      // Endereço do servidor web
        this.routeListaLivros = '/lista/livros';     // Rota configurada na API
        this.routeCadastraLivro = '/novo/livro';     // Rota configurada na API
    }

    /**
     * Faz uma requisição para buscar a lista de livros cadastrados
     * @returns Um JSON com a lista de livros ou null em caso de erro
     */
    async listarLivros(): Promise<LivroDTO[] | null> {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivros}`);

            if (respostaAPI.ok) {
                const listaDeLivros: LivroDTO[] = await respostaAPI.json();
                return listaDeLivros;
            }

            return null;
        } catch (error) {
            console.error(`Erro ao buscar livros: ${error}`);
            return null;
        }
    }

    /**
     * Envia os dados do formulário de livro para a API
     * @param formLivro Objeto com os valores do formulário
     * @returns true se o cadastro for bem-sucedido, false se ocorrer erro
     */
    async enviaFormularioLivro(formLivro: string): Promise<boolean> {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeCadastraLivro}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formLivro
            });

            if (!respostaAPI.ok) {
                throw new Error('Erro ao fazer requisição com o servidor.');
            }

            return true;
        } catch (error) {
            console.error(`Erro ao enviar o formulário de livro: ${error}`);
            return false;
        }
    }
}

// Exporta a classe já instanciada
export default new LivroRequests();