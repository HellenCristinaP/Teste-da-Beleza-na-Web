function Pagamento() {
  return (
    <div>
        <section className="border border-[#CCCCCC] rounded-[4px] my-5 mx-2 p-5 bg-white lg:w-lg">
          <h2 className="py-4 text-xl">Cartão de crédito</h2>
          <form action="" method="post" autoComplete="off" className="flex flex-col">
            <label htmlFor="numeroDoCartao">Número do Cartão</label>
            <input type="number" name="numeroDoCartao" id="numeroDoCartao" className="border border-[#CCCCCC] rounded-[4px] py-2 px-3 mb-4" placeholder="0000 0000 0000 0000"/>

            <label htmlFor="nomeDoTitular">Nome do Titular</label>
            <input type="text" name="nomeDoTitular" id="nomeDoTitular" className="border border-[#CCCCCC] rounded-[4px] p-2 mb-4" placeholder="Nome impresso no cartão"/>

            <label htmlFor="dataDeValidade">Data de Validade</label>
            <input type="text" name="dataDeValidade" id="dataDeValidade" className="border border-[#CCCCCC] rounded-[4px] p-2 mb-4" placeholder="MM/AAAA"/>

            <label htmlFor="codigoCVV">Código CVV</label>
            <input type="number" name="codigoCVV" id="codigoCVV" className="border border-[#CCCCCC] rounded-[4px] p-2 mb-4" placeholder="000"/>
          </form>
        </section>
    </div>
  );
}

export default Pagamento;