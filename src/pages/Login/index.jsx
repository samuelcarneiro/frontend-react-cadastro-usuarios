import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api.js";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    // Envia os dados para a api
    try {
      const { data: token } = await api.post("/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      //Slavar o token do usuário no localStorage do navegador
      localStorage.setItem("token", token);
      console.log(token);

      //Assim que logar, ser redirecionado para a página de listagem
      navigate('/listar');
    } catch (err) {
      alert("Senha ou email incorretos!");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>
      <form action="#" className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
      <Link
        to="/"
        className="block text-center text-blue-700 mt-5 hover:underline"
      >
        Não tem uma conta? Cadastre-se!
      </Link>
    </div>
  );
}

export default Login;
