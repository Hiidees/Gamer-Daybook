import { useContext } from "react";
import AppTranslationUIStore from "../Stores/UIStores/AppTranslation";

export default function useAppTranslation() {
  return useContext(AppTranslationUIStore);
}
