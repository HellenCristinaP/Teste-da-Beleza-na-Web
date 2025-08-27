import Produtos from './produtos.jsx';

function Confirmacao() {
  return (
    <div>
        <section>
          <div>
            <p>Compra efetuada com sucesso</p>
            <p>dados</p>
          </div>
          <div>
            <p>Produtos</p>
            <Produtos srcProduto="/public/produtoLOrealProfessionnelMdR.jpg" altProduto="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução" />
          </div>
        </section>
    </div>
  );
}

export default Confirmacao;