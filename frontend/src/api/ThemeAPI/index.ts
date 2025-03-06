import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Theme } from "@/types/features";

export const themeApi = createApi({
    reducerPath: "themeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/themes" }), // Базовый URL для запросов
    endpoints: (builder) => ({
      getThemes: builder.query<Theme[], void>({
        query: () => "/_list.json", // Загружаем JSON
      }),
    }),
  });
  
  export const { useGetThemesQuery } = themeApi; // Экспортируем хук для использования в компонентах