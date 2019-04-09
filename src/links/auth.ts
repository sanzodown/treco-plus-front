import {setContext} from "apollo-link-context";
import AuthManager from "../services/AuthManager";

export default setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      ...(AuthManager.isLoggedIn ? {
        Authorization: `Bearer ${AuthManager.getToken()}`
      } : {}),
    }
  }
})
