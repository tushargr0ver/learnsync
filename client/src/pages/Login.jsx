import { useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const { supabase } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState("");
  const navigate=useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    // const { error } = await supabase.auth.signInWithPassword({ email, password });

    // if (error) console.error(error);
    // if(!error) 
    navigate('/')
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <label>
        <input
          type="radio"
          value="option1"
          checked={selected === "option1"}
          onChange={(e) => setSelected(e.target.value)}
        />
        Option 1
      </label>

      <label>
        <input
          type="radio"
          value="option2"
          checked={selected === "option2"}
          onChange={(e) => setSelected(e.target.value)}
        />
        Option 2
      </label>
      <button type="submit">Login</button>
      
    </form>
  );
};

export default Login;