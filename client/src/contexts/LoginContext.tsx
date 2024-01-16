import { Dispatch, SetStateAction, createContext } from "react"
import { User } from "../types/entities";

export interface LoginContextType {
  loggedUser: User | null;
  setLoggedUser?: Dispatch<SetStateAction<User | null>>
}

export const LoginContext = createContext<LoginContextType>({
  loggedUser: null
})
