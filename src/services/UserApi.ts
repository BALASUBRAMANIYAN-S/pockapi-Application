import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: (offset = 0) => `pokemon?limit=20&offset=${offset}`,
    }),
     getPokemonByName: builder.query({
      query: ({ name, }) => `pokemon/${name}`,
    }),
  }),
});

export const {
  useGetUserDataQuery,
  useGetPokemonByNameQuery,
} = UserApi;
