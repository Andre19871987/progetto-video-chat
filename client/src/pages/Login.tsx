import { Dispatch, FormEventHandler, useContext, useState } from 'react';
import { getLoggedUser, login } from '../api/auth';
import { User } from '../types/entities';
import { LoginContext } from '../contexts/LoginContext';

export interface LoginPageProps {
  setLoggedUser: Dispatch<React.SetStateAction<User | null>>;
}

export default function LoginPage() {
  const { setLoggedUser } = useContext(LoginContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      /*
      const formData = new FormData(event.target as HTMLFormElement);
      const email = formData.get("email") ? String(formData.get("email")) : "";
      const password = formData.get("password")
        ? String(formData.get("password"))
        : "";
        */
      await login(email, password);
      const loggedUser = await getLoggedUser();
      setLoggedUser && setLoggedUser(loggedUser);
    } catch (e) {
      console.error(e);
    }
  };
  const Gianfranco = () => {
    setEmail('gianfranco.lopresti@example.com');
    setPassword('Pwd#gianfranco-lo-presti');
  };

  const Salvatore = () => {
    setEmail('salvatore.spinoccia@example.com');
    setPassword('Pwd#salvatore-spinoccia');
  };

  const Andreia = () => {
    setEmail('andreia.donzelli@example.com');
    setPassword('Pwd#andreia-donzelli');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password </label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Accedi</button>
        <button onClick={Andreia}>Andreia</button>
        <button onClick={Gianfranco}>Gianfranco</button>
        <button onClick={Salvatore}>Salvatore</button>
        </form>
      </div>
  );
}
