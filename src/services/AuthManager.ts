// @ts-ignore
import jwtDecode from "jwt-decode";

export const AUTH_REFRESH_TOKEN = 'refresh_token'
export const AUTH_TOKEN = 'token'

class AuthManager {
  public isTokenValid(): boolean {
    try {
      const decoded = jwtDecode(this.getToken());
      const expirationDate = new Date(decoded.exp * 1000);
      return expirationDate.getTime() > Date.now();
    } catch (e) {
      this.removeToken();
      this.removeRefreshToken();
      return false;
    }
  }

  public login(token: string, refreshToken: string) {
    this.setTokens(token, refreshToken)
  }

  public hasToken(): boolean {
    return (
      localStorage.getItem(AUTH_TOKEN) !== "undefined" &&
      localStorage.getItem(AUTH_TOKEN) !== undefined &&
      localStorage.getItem(AUTH_TOKEN) !== null
    );
  }

  public hasRefreshToken(): boolean {
    return (
      localStorage.getItem(AUTH_REFRESH_TOKEN) !== "undefined" &&
      localStorage.getItem(AUTH_REFRESH_TOKEN) !== undefined &&
      localStorage.getItem(AUTH_REFRESH_TOKEN) !== null
    );
  }

  private removeToken(): void {
    localStorage.removeItem(AUTH_TOKEN);
  }

  private removeRefreshToken(): void {
    localStorage.removeItem(AUTH_REFRESH_TOKEN);
  }

  public logout(): void {
    this.removeToken()
    this.removeRefreshToken()
  }

  private setToken(token: string): void {
    localStorage.setItem(AUTH_TOKEN, token);
  }

  private setRefreshToken(refreshToken: string): void {
    localStorage.setItem(AUTH_REFRESH_TOKEN, refreshToken);
  }

  public getToken(): string | null {
    return localStorage.getItem(AUTH_TOKEN);
  }

  public getRefreshToken(): string | null  {
    return localStorage.getItem(AUTH_REFRESH_TOKEN);
  }

  private setTokens(token: string, refreshToken: string) {
    this.setToken(token);
    this.setRefreshToken(refreshToken);
  }

  public async askNewToken(): Promise<{ token: string, refresh_token: string}> {
    if (this.isLoggedIn()) {
      let request = await fetch(process.env.REACT_APP_REFRESH_TOKEN_URL || 'http://localhost:4000', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${this.getToken()}`
        },
        body: JSON.stringify({
          refresh_token: this.getRefreshToken()
        })
      });
      if (request.ok) {
        return request.json();
      }

      return Promise.reject();
    }

    return Promise.reject();
  }

  public isLoggedIn(): boolean {
    return this.hasToken() && this.hasRefreshToken();
  }
}

export default new AuthManager()
