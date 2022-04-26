import { useReducer } from "react";
import reducer from "./reducers/AppTranslationReducer";
import IAppTranslation from "../../Domains/Interfaces/IContextTranslation";
import SupportedLangugesEnum from "../../Domains/Enums/AppTranslationEnums";
import { AppTranslationStore } from "../../Stores/UIStores/AppTranslation";
import AppTranslationUIStore from "../../Stores/UIStores/AppTranslation";
import { default as EnDataTranslation } from "../../Stores/Data/Translations/en.json";

interface IProviderProps {}

function AppTranslationProvider(
  props: React.PropsWithChildren<IProviderProps>
) {
  const { children } = props;

  const appTranslationStore = AppTranslationStore.getInstance();

  const initialState: IAppTranslation = {
    // We should take initial state from cookies/local storage
    translation: EnDataTranslation,
    updateTranslation: updateTranslation,
    getTranslationKey: getTranslationKey,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function updateTranslation(LanguageCode: SupportedLangugesEnum) {
    appTranslationStore.translation = LanguageCode;
    dispatch(appTranslationStore.translation);
  }

  function getTranslationKey() {
    return appTranslationStore.translationKey;
  }

  return (
    <AppTranslationUIStore.Provider
      value={{
        translation: state.translation,
        updateTranslation: updateTranslation,
        getTranslationKey: getTranslationKey,
      }}
    >
      {children}
    </AppTranslationUIStore.Provider>
  );
}

export { AppTranslationProvider };
