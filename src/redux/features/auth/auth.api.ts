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

    senderParcelInfo: builder.query({
      query: () => ({
        url: `/parcel/me`, // ✅ use sender’s own parcels
        method: "GET",
      }),
      providesTags: ["PARCEL"],
    }),

    createParcel: builder.mutation({
      query: (parcelData) => ({
        url: "/parcel",
        method: "POST",
        data: parcelData,
      }),
      invalidatesTags: ["PARCEL"],
    }),

    updateParcelStatus: builder.mutation({
      query: ({ id, status }: { id: string; status: string }) => ({
        url: `/parcel/status/${id}`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["PARCEL"],
    }),

    deleteParcel: builder.mutation({
      query: (id: string) => ({
        url: `/parcel/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PARCEL"],
    }),

    statusLog: builder.query({
      query: (id: string) => ({
        url: `/parcel/${id}/status-log`,
        method: "GET",
      }),
      providesTags: (id) => [{ type: "PARCEL", id }],
    }),

    getIncomingParcels: builder.query({
      query: () => ({
        url: "/parcel/incoming",
        method: "GET",
      }),
      providesTags: ["PARCEL"],
    }),

    confirmParcelDelivery: builder.mutation({
      query: (id: string) => ({
        url: `/parcel/confirm/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCEL"],
    }),

    cancelParcel: builder.mutation({
      query: (id: string) => ({
        url: `/parcel/cancel/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCEL"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        // Optimistic cache update
        const patchResult = dispatch(
          authApi.util.updateQueryData(
            "senderParcelInfo",
            undefined,
            (draft) => {
              draft.data = draft.data.filter(
                (p: { _id: string }) => p._id !== id
              );
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
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
  useSenderParcelInfoQuery,
  useCreateParcelMutation,
  useUpdateParcelStatusMutation,
  useDeleteParcelMutation,
  useStatusLogQuery,
  useGetIncomingParcelsQuery,
  useConfirmParcelDeliveryMutation,
  useCancelParcelMutation,
} = authApi;
