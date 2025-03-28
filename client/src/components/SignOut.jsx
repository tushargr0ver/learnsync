const signOut = async () => {
    await supabase.auth.signOut();
    console.log('User signed out');
  };
  