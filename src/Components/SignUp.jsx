export default function SignUp() {
  return (
    <div className="text-center">
      <h3 className="mb-6">Create Your Account</h3>
      <div>
        <form>
          <h4>
            First Name
            <input
              placeholder="Your Name"
              className="mb-6 cursor-pointer  text-center font-semibold border-solid border-2 border-sky-300 rounded-full"
            ></input>
          </h4>
          <h4>
            Second Name
            <input
              placeholder="Your Email"
              className="mb-6 cursor-pointer  text-center font-semibold border-solid border-2 border-sky-300 rounded-full"
            ></input>
          </h4>
          <h4>
            Email
            <input
              placeholder="Your Name"
              className="mb-6 cursor-pointer  text-center font-semibold border-solid border-2 border-sky-300 rounded-full"
            ></input>
          </h4>
          <h4>
            Password
            <input
              placeholder="Your Password"
              className="mb-6 cursor-pointer  text-center font-semibold border-solid border-2 border-sky-300 rounded-full"
            ></input>
          </h4>
        </form>
        <button
          type="submit"
          className="flex-col justify-center cursor-pointer  mt-3 text-white focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
