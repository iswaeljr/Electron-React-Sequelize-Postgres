// Arquivo: PosInterface.tsx
import React from 'react';

// Tipos para as props (se necessário no futuro)
interface PosInterfaceProps {
  operador: string;
  loja: string;
  terminal: number;
}

const Vendas: React.FC<PosInterfaceProps> = ({ operador, loja, terminal }) => {
  return (
    <div className="bg-gray-100 flex flex-col items-center">
      {/* Seção de entrada de produto */}
      <section className="w-11/12 bg-white shadow-md rounded-lg p-4 mt-6">
        <div className="grid grid-cols-12 gap-4">
          <input
            type="number"
            placeholder="Qtde (Shift+Q)"
            className="col-span-2 border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            placeholder="CÓDIGO DE BARRAS, CÓDIGO DO PRODUTO OU DESCRIÇÃO"
            className="col-span-6 border border-gray-300 rounded-md p-2"
          />
          <div className="col-span-4 flex space-x-2">
            <button className="bg-yellow-400 px-4 py-2 rounded-md text-white hover:bg-yellow-500">
              DESCONTO (Shift+D)
            </button>
            <button className="bg-green-400 px-4 py-2 rounded-md text-white hover:bg-green-500">
              TROCA (Shift+T)
            </button>
            <button className="bg-red-400 px-4 py-2 rounded-md text-white hover:bg-red-500">
              VOUCHER (Shift+V)
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600">
              AÇÃO PROMOCIONAL
            </button>
          </div>
        </div>
      </section>

      {/* Tabela de produtos */}
      <table className="w-11/12 bg-white shadow-md rounded-lg mt-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left">#</th>
            <th className="py-2 px-4 text-left">Código</th>
            <th className="py-2 px-4 text-left">Descrição</th>
            <th className="py-2 px-4 text-left">Cor</th>
            <th className="py-2 px-4 text-left">Tamanho</th>
            <th className="py-2 px-4 text-left">Qtd</th>
            <th className="py-2 px-4 text-left">Preço</th>
            <th className="py-2 px-4 text-left">Desconto</th>
            <th className="py-2 px-4 text-left">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={9} className="py-4 px-4 text-center text-gray-500">
              Nenhum item adicionado
            </td>
          </tr>
        </tbody>
      </table>

      {/* Rodapé */}
      <footer className="w-11/12 bg-white shadow-md rounded-lg p-4 mt-6 flex justify-between">
        <div className="text-sm">
          <p>Cliente: Não informado</p>
          <p>Operador: {operador}</p>
          <p>Loja: {loja}</p>
          <p>Terminal: {terminal}</p>
        </div>
        <div className="text-right">
          <p>Itens: 0</p>
          <p>Subtotal: R$ 0,00</p>
          <p>Desconto: R$ 0,00</p>
          <p>Total a Pagar: R$ 0,00</p>
        </div>
      </footer>
    </div>
  );
};

export default Vendas;
