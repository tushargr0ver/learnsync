import React from 'react'
import { supabase } from '../utils/supabaseClient';

export default function SignOut() {
     const signout = () =>{
        supabase.auth.signOut();
localStorage.removeItem("supabaseSession");
window.location.reload();


    }
  return (
    <div><button onClick={signout} className="bg-[#008CFF] text-white py-2 px-8 font-medium rounded-lg transition-all duration-200 hover:bg-[#0066CC]">
    Sign Out
</button></div>
  )
}
