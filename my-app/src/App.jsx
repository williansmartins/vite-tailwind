import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const people = [
    {
      name: "Calvin Hawkins",
      email: "calvin.hawkins@example.com",
      image:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Kristen Ramos",
      email: "kristen.ramos@example.com",
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Ted Fox",
      email: "ted.fox@example.com",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Willians Martins",
      email: "willians.martins@example.com",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  useEffect(
    ()=>{
      console.info(123);
    }, [count]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Cabeçalho */}
      <header className="w-full bg-blue-600 text-white py-4 text-center text-lg font-bold shadow-md">
        Count ({count})
        Count2 ({count2})
      </header>

      {/* Container Principal */}
      <main className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Contatos Recentes
        </h2>

        {/* Lista de Pessoas */}
        <ul className="divide-y divide-gray-200">
          {people.map((person) => (
            <li key={person.email} className="flex items-center py-4">
              {/* Imagem do usuário */}
              <img
                className="size-12 rounded-full shadow-sm cursor-pointer"
                src={person.image}
                alt={person.name}
                onClick={() => setCount(count + 1)}
              />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">
                  {person.name}
                </p>
                <p className="text-sm text-gray-500">{person.email}</p>

                {/* Grupo de Botões */}
                <div className="flex gap-2 mt-3">
                  {/* Remover contato */}
                  <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                    onClick={() => setCount2(count2 + 1)}>
                    Remover
                  </button>

                  {/* Confirmar ação */}
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 active:scale-95 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Confirmar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
