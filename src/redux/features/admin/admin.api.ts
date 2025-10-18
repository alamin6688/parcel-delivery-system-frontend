// import { baseApi } from "@/redux/baseApi";

// export const authApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (userInfo) => ({
//         url: "/auth/login",
//         method: "POST",
//         data: userInfo,
//       }),

//       invalidatesTags: ["USER"],
//     }),

//     userInfo: builder.query({
//       query: () => ({
//         url: "/user/me",
//         method: "GET",
//       }),
//       providesTags: ["USER"],
//     }),
//   }),
// });

// export const {
//   useLoginMutation,
//   useUserInfoQuery,
// } = authApi;
