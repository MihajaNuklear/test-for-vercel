import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Typage pour les options de requête
interface RequestOptions<T> extends AxiosRequestConfig {
  data?: T;
}

// Typage générique pour la réponse API
export type ApiResponse<T> = {
  data: T;
  status: number;
  statusText: string;
};

// Gestion centralisée des erreurs
function handleError(error: any): never {
  if (error.response) {
    // La requête a été faite et le serveur a répondu avec un code d'état non valide
    console.error(
      'Erreur de réponse API:',
      error.response.status,
      error.response.data,
    );
    throw new Error(
      `Erreur ${error.response.status}: ${error.response.statusText}`,
    );
  } else if (error.request) {
    // La requête a été faite mais aucune réponse n'a été reçue
    console.error('Erreur de requête API:', error.request);
    throw new Error("Aucune réponse reçue de l'API");
  } else {
    // Erreur liée à la configuration de la requête
    console.error(
      'Erreur lors de la configuration de la requête:',
      error.message,
    );
    throw new Error("Erreur inconnue lors de l'appel API");
  }
}

const apiService = {
  // Méthode générique pour effectuer des appels à l'API
  request: async <T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data: any = null,
    headers: Record<string, string> = {},
    axiosInstance: AxiosInstance = axios,
  ): Promise<ApiResponse<T>> => {
    try {
      const options: AxiosRequestConfig = {
        url,
        method,
        headers,
        data, // Sera null si non fourni
      };

      const response: AxiosResponse<T> =
        await axiosInstance.request<T>(options);

      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      handleError(error);
    }
  },

  // Méthodes spécifiques pour simplifier l'utilisation des requêtes
  get: async <T>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<ApiResponse<T>> =>
    apiService.request<T>(url, 'GET', null, headers),

  post: async <T>(
    url: string,
    data: T,
    headers?: Record<string, string>,
  ): Promise<ApiResponse<T>> =>
    apiService.request<T>(url, 'POST', data, headers),

  put: async <T>(
    url: string,
    data: T,
    headers?: Record<string, string>,
  ): Promise<ApiResponse<T>> =>
    apiService.request<T>(url, 'PUT', data, headers),

  delete: async <T>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<ApiResponse<T>> =>
    apiService.request<T>(url, 'DELETE', null, headers),
};

export default apiService;
