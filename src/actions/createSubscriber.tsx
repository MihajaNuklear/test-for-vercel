import apiService, { ApiResponse } from '@/services/apiService';

interface SubscriberData {
  email: string;
  name: string;
  surname: string;
}

interface SubscriberResponse {
  data?: any; // Define the expected data structure her0 if you know it
  error?: string;
}

export const createSubscriber = async ({
  email,
  name,
  surname,
}: SubscriberData): Promise<SubscriberResponse> => {
  try {
    const formData = new FormData();
    formData.append('data', JSON.stringify({ email, name, surname }));

    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/newsletters`;
    // Call the API using the post method from apiService
    const response: ApiResponse<any> = await apiService.post(url, formData);
    console.log(response);
    return { data: response.data };
  } catch (error: any) {
    return { error: error.message };
  }
};
