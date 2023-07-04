export default function Login() {
  return (
    <div>
      <p className="mb-6 text-center">
        Already a User? Please enter the following.
      </p>
      <form className="text-center" onSubmit={""}>
        <input
          placeholder="Email"
          className="mb-6 cursor-pointer  text-center border-solid border-2 border-blue-800 rounded-full"
        ></input>
        <input
          placeholder="Password"
          className="mb-6 cursor-pointer  text-center  border-solid border-2 border-blue-800 rounded-full"
        ></input>
      </form>
      <button className=" justify-center cursor-pointer  mt-3 text-white focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-900">
        Log In
      </button>
      <p className="text-center">
        Do not have an account?{""}
        <a className="text-blue-900 " href="">
          Sign Up
        </a>
      </p>
    </div>
  );
}
