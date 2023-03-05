import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ohupiaajynvuspdmbhxo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9odXBpYWFqeW52dXNwZG1iaHhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM2MTk5NTQsImV4cCI6MTk4OTE5NTk1NH0.TCDZLa30k3gt0fS3E1qphqggHZ6Vva5lci-YLyRp4oo"
);

export function signUpWithEmail(username, email, password, callback) {
  supabase.auth
    .signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
        },
        emailRedirectTo: "http://localhost:3000/login",
      },
    })
    .then(({ data, error }) => {
      if (error) console.log(error);
      if (
        error ===
        'AuthApiError: duplicate key value violates unique constraint "profiles_username_key"'
      ) {
        callback(data, 1);
      } else {
        callback(data, error);
      }
    });
}

export function signInWithEmail(email, password, callback) {
  supabase.auth
    .signInWithPassword({
      email: email,
      password: password,
    })
    .then((data, error) => {
      callback(data, error);
    });
}

export function signOut(callback) {
  supabase.auth.signOut().then((err) => {
    callback(err);
  });
}

export function getSession(callback) {
  supabase.auth.getSession().then((data, error) => {
    if (error) console.error(error);

    callback(data.data, data.error);
  });
}

export function getUserData(callback) {
  getSession((data, error) => {
    console.log(data);

    if (error) {
      console.error(error);
      callback(data.data, error);
    } else {
      supabase
        .from("profiles")
        .select()
        .eq("id", data.session.user.id)
        .then((data, error) => {
          if (error) console.error(error);

          callback(data);
        });
    }
  });
}
