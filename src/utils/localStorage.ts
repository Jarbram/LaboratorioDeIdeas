export const getItem = (key: string): any => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  
  export const setItem = (key: string, data: any): void => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  