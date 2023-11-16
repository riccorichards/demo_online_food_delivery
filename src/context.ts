import { createContext } from "react";
import { FilterByType } from "./redux/ApiCall";


interface CatContextType {
  filterBy: FilterByType;
  setFilterBy: any;
}

const CatContext = createContext<CatContextType | null>(null);

export default CatContext;
