import { Dispatch, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { logout } from "../api/auth";
import { User } from "../types/entities";
import { LoginContext } from "../contexts/LoginContext";

export default function Logout() {
  const { setLoggedUser } = useContext(LoginContext);
  const [primaVolta, setPrimaVolta] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (primaVolta) {
      setPrimaVolta(false);
    } else {
      logout().then(() => {
        setLoggedUser && setLoggedUser(null);
        navigate("/");
      });
    }
  }, [primaVolta]);

  return <></>;
}
