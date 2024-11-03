import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api.js";

function ListarUsuarios() {
  const [allUsers, setAllUsers] = useState();
  useEffect(() => {
    async function loadUsers() {
      //Pegar o token do localStorage
      const token = localStorage.getItem("token");
      const {
        data: { users },
      } = await api.get("/listar-usuarios", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setAllUsers(users);
    }

    loadUsers();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg"> 
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Listar Usuários</h2>
      {/* Mapear */}
      <ul className="space-y-2">
        {allUsers && allUsers.map((user) => (
            <li key={user.id} className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">ID: {user.id}</p>
                <p className="font-semibold">Nome: {user.name}</p>
                <p className="font-semibold">Email: {user.email}</p>
            </li>
        ))}
      </ul>

      <Link
        to="/"
        className="block text-center text-blue-700 mt-5 p-4 rounded-lg bg-blue-100 hover:bg-blue-200"
      >
        Voltar
      </Link>
    </div>
  );
}

export default ListarUsuarios;
