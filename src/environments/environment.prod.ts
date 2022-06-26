export const environment = {
  production: true,
  urlApi:
  {
    urlBase: 'https://localhost:7166/',
    urlAuth: {
      base: 'api/Authentications',
      anonymous: '/anonymous',
      authenticated: '/authenticated',
      employee: '/employee',
      manager: '/manager'
    },
  },
credentialsKey: 'userCredentials'
};
