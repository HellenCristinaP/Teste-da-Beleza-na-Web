import Produtos from "./produtos";
import produto1 from '/public/produtoLOrealProfessionnelMdR.jpg'
import produto2 from '/public/goodGirlCHEauParfum.jpg'
import produto3 from '/public/senscienceInnerRestoreMC.png'
import dados from './assets/dados.js'

function Sacola() {

  return (
    <div className="grid gap-10 pb-10 rounded-[4px] border border-[#CCCCCC] my-5 pt-6 w-fit m-2 bg-white">
      <Produtos srcProduto={produto1} altProduto="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução" nomeDoProduto={dados.produtos[0].nome} precoNormal={dados.produtos[0].preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} precoComDesconto={dados.produtos[0].precoComDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}/>

      <Produtos srcProduto={produto2} altProduto="Good Girl - Eau de Parfum" nomeDoProduto={dados.produtos[1].nome} precoNormal={dados.produtos[1].preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}/>

      <Produtos srcProduto={produto3} altProduto="Senscience Inner Restore - Máscara de Hidratação" nomeDoProduto={dados.produtos[2].nome} precoNormal={dados.produtos[2].preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}/>

    </div>

  );
}

export default Sacola;