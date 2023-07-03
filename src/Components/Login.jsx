// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// export default function Login() {
//     const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ email, password });
//     setPassword("");
//     setEmail("");
//   }
//   return (
//     <div>
//       <p>Already a User? Please enter the following.</p>
//       <form className="" onSubmit={handleSubmit}>
//         <label>Email</label>
// <input
//   type="text"
//   required
//   id="email"
//   name="email"
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
// />
//         <label>Password</label>
//         <input
//           type="password"
//           required
//           id="password"
//           name="password"
//           value={password}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button>Log In</button>
//       </form>
//     </div>
//   );}
// }

export default function Login() {
  return (
    <div>
      <p>Already a User? Please enter the following.</p>
      <form className="" onSubmit={""}>
        <input
          placeholder="Email"
          className="mb-6 cursor-pointer  text-center font-semibold border-solid border-2 border-sky-300 rounded-full"
        ></input>
        <input
          placeholder="Password"
          className="mb-6 cursor-pointer  text-center font-semibold border-solid border-2 border-sky-300 rounded-full"
        ></input>
      </form>
      <button>Log In</button>
      <p>
        Don't have an account?{""}
        <a href="">Sign Up</a>
      </p>
    </div>
  );
}
