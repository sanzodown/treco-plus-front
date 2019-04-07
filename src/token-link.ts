import { onError } from "apollo-link-error";
import Observable from 'zen-observable';
import AuthManager from "./services/AuthManager";

export const refreshTokenMiddleware = onError(
  // @ts-ignore
  ({ forward, operation, networkError, response }) => {
    return new Observable(observer => {
      // @ts-ignore
      let sub = null;
      // @ts-ignore
      console.log(response)
      // @ts-ignore
      //@todo handle error (not authorized return 200??)
      if (networkError && networkError.statusCode === 401) {
        if (AuthManager.isLoggedIn()) {
          const oldHeaders = operation.getContext().headers;
          AuthManager.askNewToken().then(({token, refresh_token}) => {
            operation.setContext({
              headers: {
                ...oldHeaders,
                authorization: `Bearer ${token}`
              }
            });
            AuthManager.login(token, refresh_token);
            sub = forward(operation).subscribe(observer);
          });
        } else {
          sub = forward(operation).subscribe(observer);
        }
      }
      // @ts-ignore
      return () => (sub ? sub.unsubscribe() : null);
    });
  }
);
