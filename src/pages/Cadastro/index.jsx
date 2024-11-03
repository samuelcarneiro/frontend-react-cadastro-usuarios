import { useRef } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api.js";

function Cadastro() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(event) {
    event.preventDefault();

    // Envia os dados para a api
    try {
      await api.post("/cadastro", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      alert("Uusário cadastrado com sucesso!");
    } catch (err) {
      alert("Erro ao cadastrar usuário, preencha os campos corretamente!");
    }

    console.log(nameRef);
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Cadastro
      </h2>
      <form action="#" className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          name="name"
          id="name"
          placeholder="Nome"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 py-2 px-4 rounded-lg text-white font-bold hover:bg-blue-400"
        >
          Cadastrar
        </button>
      </form>
      <Link
        to="/login"
        className="block text-center text-blue-700 mt-5 hover:underline"
      >
        Já tem uma conta? Faça login.
      </Link>
    </div>
  );
}

export default Cadastro;
