"use client";
import { useAppSelector } from "../redux";

/**
 * Custom React Hook: useIsAuthenticated
 *
 * This hook is designed to check whether a user is authenticated by examining
 * the user and token state from the Redux store. It returns a boolean value
 * indicating whether the user is authenticated or not.
 *
 * @returns {boolean} - Returns true if the user is authenticated, false otherwise.
 *
 * Usage:
 * 1. Import the hook in your component:
 *    ```
 *    import { useIsAuthenticated } from 'path/to/your/hooks';
 *    ```
 * 2. Call the hook in your component to determine authentication status:
 *    ```
 *    const isAuthenticated = useIsAuthenticated();
 *    if (isAuthenticated) {
 *      // User is authenticated, show authenticated content
 *    } else {
 *      // User is not authenticated, show login/register UI
 *    }
 *    ```
 */
export const useIsAuthenticated = () => {
  const { user, token } = useAppSelector((state) => state.auth);
  if (user && token) {
    return true;
  } else {
    return false;
  }
};
