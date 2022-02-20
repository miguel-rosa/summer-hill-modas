import React, { FC, createContext, useState } from "react";

type SearchContextType = {
  search: string;
  setSearch(search: string): void;
}

export const SearchContext = createContext({} as SearchContextType);

export const SearchStorage:FC = ({children}) => {
  const [search, setSearch] = useState("")

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}