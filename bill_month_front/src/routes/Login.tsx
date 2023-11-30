function Login() {
  return (
    <>
      <form className="max-w-md mx-auto m-4 p-6 bg-white rounded-lg shadow-md">
        <input
          type="email"
          name="emailLogin"
          id="emailLogin"
          className="w-full px-4 py-3 mb-3 bg-gray-100 rounded-full focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Correo electrónico"
        />
        <input
          type="password"
          name="passwordLogin"
          id="passwordLogin"
          className="w-full px-4 py-3 mb-3 bg-gray-100 rounded-full focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Contraseña"
        />
        <button
          type="submit"
          className="w-full px-4 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Iniciar sesión
        </button>
      </form>
    </>
  );
}

export default Login;
