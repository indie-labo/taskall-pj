import { useEffect, useState } from 'react'
import { auth } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Top from "@/components/Top";
import Login from "@/components/Login";

function App() {
  const [user, setUser] = useState<string|undefined>("");

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user?.uid);
    });
  }, []);

  return (
    <>
      {user ? (<Login />) : (<Top />)}
    </>
  )
}

export default App
