export default function Login() {
  return (
    <form>
      <div className="mb-2">
        <input className="shadow appearance-none border border-[#be861d] w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ID" />
      </div>
      <div className="mb-2">
        <input
          className="shadow appearance-none border border-[#be861d] w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-[#be861d] hover:bg-[#8b6317] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          SIGN IN
        </button>
      </div>
    </form>
  );
}
