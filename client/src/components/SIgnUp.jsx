const signUp = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) console.error(error);
    else console.log('User signed up:', user);
  };
  