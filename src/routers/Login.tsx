import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("https://your-api-endpoint.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Response from server:", result);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-log h-log flex flex-col gap-5 rounded-xl">
        <div className="bg-[#DADADA] w-full h-full flex flex-col gap-5">
          <h1 className="text-center font-bold text-xl p-6 h-3">Sign Up</h1>
          <form
            onSubmit={handleSubmit}
            className="h-full flex justify-center items-center p-6 flex-col gap-5"
          >
            <label className="h-2">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="h-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="h-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="h-8 bg-[#DADADA] w-full p-6 flex items-center justify-center"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
