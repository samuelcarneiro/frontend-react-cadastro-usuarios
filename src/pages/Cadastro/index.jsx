import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
      <form action="#" className="flex flex-col gap-5">
        <input type="text" name="name" id="name" placeholder="Nome" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"/>
        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />

        <button type="submit" className="w-full bg-blue-500 py-2 px-4 rounded-lg text-white font-bold hover:bg-blue-400">Cadastrar</button>
      </form>
      <Link to="/login" className="block text-center text-blue-700 mt-5 hover:underline">Já tem uma conta? Faça login.</Link>
    </div>
  );
}

export default Cadastro;
