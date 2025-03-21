import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const people = [
    {
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Cabeçalho */}
      <header className="w-full bg-blue-600 text-white py-4 text-center text-lg font-bold shadow-md">
        Lista de Contatos
      </header>

      {/* Container Principal */}
      <main className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contatos Recentes</h2>
        
        {/* Lista de Pessoas */}
        <ul className="divide-y divide-gray-200">
          {people.map((person) => (
            <li key={person.email} className="flex items-center py-4">
              <img className="size-12 rounded-full shadow-sm" src={person.image} alt={person.name} />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                <p className="text-sm text-gray-500">{person.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App
