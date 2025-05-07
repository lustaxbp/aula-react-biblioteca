import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormLivro from "../../components/formularios/FormLivro";
import Rodape from "../../components/Rodape/Rodape";

function PCadastroLivro() {
    return (
        <div className="pagina-grid">
            {/* Renderiza o cabeçalho da página */}
            <Cabecalho />

            {/* Renderiza o formulário de login */}
            <FormLivro/>

            {/* Renderiza o rodapé da página */}
            <Rodape />
        </div>
    );
}

export default PCadastroLivro;