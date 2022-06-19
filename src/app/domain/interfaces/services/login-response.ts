export interface LoginResponse {
  usuario: UsuarioResponse;
  token: string;
}

export interface UsuarioResponse {
  username: string;
  email: string;
  password: string;
  id: string;
}
