import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";

// Define the types for the request payloads and responses
interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  id: string;
}

interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

interface RegisterResponse {
  message: string;
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  isAdmin: boolean;
}

interface UpdateUserRequest {
  name?: string;
  email?: string;
  password?: string;
}

interface UpdateUserResponse {
  id: string;
  name: string;
  email: string;
}

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    updateUser: builder.mutation<UpdateUserResponse, UpdateUserRequest>({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

// Export hooks for the mutations
export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = usersApiSlice;
