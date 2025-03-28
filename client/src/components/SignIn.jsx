const signIn = async (email, password) => {
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) console.error(error);
    else console.log('User signed in:', user);
  };
  