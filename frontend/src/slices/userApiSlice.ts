import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";
const ADMIN_URL = "/api/";

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

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
}

interface GetAllUsersResponse {
  data?: User[];
  success: boolean;
  message: string;
}

interface DeleteUserResponse {
  success: boolean;
  message: string;
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

    getAllUsers: builder.query<GetAllUsersResponse, void>({
      query: () => ({
        url: `${ADMIN_URL}/admin`,
        method: "GET",
      }),
    }),

    deleteUser: builder.mutation<DeleteUserResponse, string>({
      query: (id) => ({
        url: `${ADMIN_URL}/admin/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
} = usersApiSlice;
