import { onError } from "apollo-link-error";
import {ServerError} from 'apollo-link-http-common';
import AuthManager from "../services/AuthManager";

const DENIED_MESSAGE = "Access denied to this field."

export default onError(({ graphQLErrors, networkError }) =>  {
  if (
    graphQLErrors &&
    graphQLErrors
      .filter(gqlError => !gqlError.path.includes('viewer'))
      .map(gqlError => gqlError.message)
      .join(', ')
      .includes(DENIED_MESSAGE)
  ) {
    console.warn('Tried to access to a ressource which does not seems to belong to the logged in user. Forbid it.')
  }
  if (
    networkError &&
    (networkError as ServerError).statusCode !== undefined &&
    (networkError as ServerError).statusCode === 401
  ) {
    AuthManager.logout()
  }
})
