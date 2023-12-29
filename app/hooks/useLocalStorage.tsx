"use client";

export const useLocalStorage = () => {
  const setItem = (key: string, value: any) => {
    if (window !== undefined) {
      localStorage.setItem(key, value);
    }
  };

  const getItem = (key: string) => {
    if (window !== undefined) {
      return localStorage.getItem(key);
    }
  };

  const removeItem = (key: string) => {
    if (window !== undefined) {
      localStorage.removeItem(key);
    }
  };

  return { setItem, getItem, removeItem };
};
