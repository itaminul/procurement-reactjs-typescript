// src/services/authService.ts

interface Credentials {
  username: string;
  password: string;
}

export const login = async ({ username, password }: Credentials): Promise<boolean> => {
  // Replace this with actual authentication logic
  return new Promise((resolve) => {
    setTimeout(() => {
      const isAuthenticated = username === 'admin' && password === 'password';
      if (isAuthenticated) {
        localStorage.setItem('isAuthenticated', 'true');
      }
      resolve(isAuthenticated);
    }, 1000);
  });
};

export const logout = (): void => {
  localStorage.removeItem('isAuthenticated');
};
