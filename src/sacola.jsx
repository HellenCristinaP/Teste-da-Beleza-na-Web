import Produtos from "./produtos";

function Sacola() {

  return (
    <div className="grid gap-10 pb-10 rounded-[4px] border border-[#CCCCCC] my-5 pt-6 w-fit m-2 bg-white">
      <Produtos srcProduto="/public/produtoLOrealProfessionnelMdR.jpg" altProduto="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução" nomeDoProduto={"L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução"} precoNormal={"245,90"} precoComDesconto={"223,90"}/>
      <Produtos srcProduto="/public/goodGirlCHEauParfum.jpg" altProduto="Good Girl - Eau de Parfum" nomeDoProduto={"Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml"} precoNormal={"299,00"}/>
      <Produtos srcProduto={"/public/senscienceInnerRestoreMC.png"} altProduto="Senscience Inner Restore - Máscara de Hidratação" nomeDoProduto={"Senscience Inner Restore - Máscara de Hidratação 250g"} precoNormal="99,90"/>
      
    </div>

  );
}

export default Sacola;