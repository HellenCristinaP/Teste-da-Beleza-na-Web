import { useState } from 'react'
import './App.css'
import Produtos from './produtos.jsx'
import Sacola from './sacola.jsx'
import Pagamento from './pagamento.jsx'
import Confirmacao from './confirmacao.jsx'


function App() {
  const [activeOption, setActiveOption] = useState('Sacola');
  const namesOption = ['Sacola', 'Pagamento', 'Confirmação'];

  return (
    <div>
      <nav>
        <ul className="flex flex-row justify-center w-full shadow-black/10 shadow-[0_2px_4px]">
          {namesOption.map((Option) => (
            <li
              key={Option}
              className={`cursor-pointer flex border-b-[1px] border-[#878787] text-[#878787] p-[8px] ${activeOption === Option ? 'active' : ''}`} onClick={() => setActiveOption(Option)}> {Option}
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:flex justify-center">
        {activeOption === 'Sacola' && (
          <Sacola />
        )}
        {activeOption === 'Pagamento' && (
          <Pagamento />
        )}
        {activeOption === 'Confirmação' && (
          <Confirmacao />
        )}
      <footer className="bg-white px-5 pt-7 lg:border lg:border-[#CCCCCC] lg:rounded-[4px] lg:shadow-[0_2px_4px] lg:shadow-black/10 lg:mt-5 lg:h-fit">
        <div className="grid grid-cols-2 gap-2 pb-6">
          <p>Produtos: (3) itens</p>
          <p className="place-self-end">R$ 624,80</p>
          <p>Frete</p>
          <p className="place-self-end">R$ 5,30</p>
          <p>Desconto</p>
          <p className="place-self-end text-[#9222DC] font-bold">R$ 30.00</p>
          <p className='font-bold'>Subtotal</p>
          <p className="place-self-end font-bold">R$ 600,10</p>
        </div>
        <button className="bg-[#9222DC] text-white font-bold rounded-sm text-lg py-2 w-full mb-7 cursor-pointer" onClick={() => setActiveOption('Pagamento')}>Seguir para o pagamento</button>
      </footer>
      </div>
    </div>
  )
}

export default App
