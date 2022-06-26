export const environment = {
  production: false,
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
