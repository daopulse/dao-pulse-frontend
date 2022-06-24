export const getJwtToken = (): string | null => {
  return localStorage.getItem('JWT');
};

export const removeJwtToken = (): void => {
  localStorage.removeItem('JWT');
};

export const setJwtToken = (token: string): void => {
  localStorage.setItem('JWT', token);
};
