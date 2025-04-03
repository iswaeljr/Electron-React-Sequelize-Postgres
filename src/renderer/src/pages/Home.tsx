import { Link } from "react-router-dom"

export default function Home(){
  return(
    <div className="w-64 ml-3 mb-3"> 
        <label htmlFor="locations" className="block text-sm font-medium text-gray-700 mt-3 mb-2">
            Loja:
        </label>
        <select id="locations" name="locations" 
            className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none p-2">
            <option value="kattleya">Kattleya Pátio</option>
            <option value="taco">Taco Boulevard</option>
            <option value="daiso">Daiso Parque</option>
            <option value="victorhugo">Victor Hugo Boulevard</option>
        </select>
    </div>
  )
}

