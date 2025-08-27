function Produtos({ srcProduto, altProduto, nomeDoProduto, precoComDesconto, precoNormal }) {
  const temDesconto = precoComDesconto && precoNormal

  return (
    <div className="gap-[15px] place-items-center grid grid-cols-3 lg:max-w-xl">
      <img src={srcProduto} alt={altProduto} />
      <p>{nomeDoProduto}</p>
      <div>
        {temDesconto ? (
          <>
            <p className="line-through text-[#9B9B9B]">{precoNormal}</p>
            <p className="text-black">{precoComDesconto}</p>
          </>
        ) : (
          <p className="text-black">{precoNormal || precoComDesconto}</p>
        )}
      </div>
    </div>
  );
}

export default Produtos;