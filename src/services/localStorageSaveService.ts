export type LocalStorageSaveServiceInterface = {
  save: (data: unknown, key: string) => void;
  load: (key: string) => unknown;
}

export const localStorageSaveService = (): LocalStorageSaveServiceInterface => {
  const save = (data: unknown, key: string) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const load = (key: string) => {
    const store = localStorage.getItem(key);
    return (store ? <unknown>JSON.parse(store) : undefined);
  };

  return { save, load };
};
