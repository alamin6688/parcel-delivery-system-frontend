import { baseApi } from "@/redux/baseApi";
import type { IResponse, ISendOtp, IVerifyOtp } from "@/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),

      invalidatesTags: ["USER"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        data: userInfo,
      }),
    }),
    verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo,
      }),
    }),
    getUserById: builder.query({
      query: (id: string) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),

    parcelInfo: builder.query({
      query: () => ({
        url: `/parcel`,
        method: "GET",
      }),
      providesTags: ["PARCEL"],
    }),

    parcelBlock: builder.mutation({
      query: (id: string) => ({
        url: `/parcel/block/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCEL"],
    }),
    parcelUnblock: builder.mutation({
      query: (id: string) => ({
        url: `/parcel/unblock/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCEL"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useUserInfoQuery,
  useLogoutMutation,
  useGetUserByIdQuery,
  useParcelInfoQuery,
  useParcelBlockMutation,
  useParcelUnblockMutation,
} = authApi;
