import { AuthBindings, AuthProvider } from '@refinedev/core';
import axios from 'axios';

export const TOKEN_KEY = 'refine-auth';
const API_BASE_URL = import.meta.env.VITE_V1_BACK_URL;
console.log(API_BASE_URL);
export const authProvider: AuthProvider = {
  login: async ({ username, email, password }) => {
    try {
      if ((username || email) && password) {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, {
          email,
          password,
        });
        const { token } = response.data;

        localStorage.setItem(TOKEN_KEY, token);
        return {
          success: true,
          redirectTo: '/',
        };
      }
      return {
        success: false,
        error: {
          name: 'LoginError',
          message: 'Invalid username or password',
        },
      };
    } catch (error) {
      return {
        success: false,
        error: {
          name: 'LoginError',
          message: 'Invalid username or password',
        },
      };
    }
  },
  register: async ({ email, password }) => {
    try {
      if (email && password) {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, {
          email,
          password,
        });
        const { token } = response.data;
        localStorage.setItem(TOKEN_KEY, token);

        return {
          success: true,
          redirectTo: '/login',
        };
      }
      return {
        success: false,
        error: {
          name: 'LoginError',
          message: 'Invalid username or password',
        },
      };
    } catch (error) {
      return {
        success: false,
        error: {
          name: 'LoginError',
          message: 'Invalid username or password',
        },
      };
    }
  },
  logout: async () => {
    localStorage.removeItem(TOKEN_KEY);
    return {
      success: true,
      redirectTo: '/login',
    };
  },
  check: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: '/login',
    };
  },
  getPermissions: async () => null,
  getIdentity: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        id: 1,
        name: '',
        avatar: '',
      };
    }
    return null;
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
