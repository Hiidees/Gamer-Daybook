import { useReducer } from "react";
import reducer, {
  AppTranslationAction,
  IAction,
} from "./reducers/AppTranslationReducer";
import { IAppTranslation } from "../../Domains/Interfaces/IContextTranslation";
import SupportedLangugesEnum from "../../Domains/Enums/AppTranslationEnums";
import AppTranslationUIStore from "../../Stores/UIStores/AppTranslation";
import { default as EnDataTranslation } from "../../Stores/Data/Translations/en.json";
import { default as ItDataTranslation } from "../../Stores/Data/Translations/it.json";

interface IProviderProps {}

function AppTranslationProvider(
  props: React.PropsWithChildren<IProviderProps>
) {
  const { children } = props;

  const initialState: IAppTranslation = {
    // We should take initial state from cookies/local storage
    translation: ItDataTranslation,
    translationKey: SupportedLangugesEnum.It,
    updateTranslation: updateTranslation,
    getTranslationKey: getTranslationKey,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function updateTranslation(LanguageCode: SupportedLangugesEnum) {
    let translation = EnDataTranslation;
    let translationKey = SupportedLangugesEnum.En;

    switch (LanguageCode) {
      case SupportedLangugesEnum.It:
        translation = ItDataTranslation;
        translationKey = SupportedLangugesEnum.It;
        break;

      case SupportedLangugesEnum.En:
        translation = EnDataTranslation;
        translationKey = SupportedLangugesEnum.En;
        break;
    }

    const action: IAction = {
      type: AppTranslationAction.updateTranslation,
      payload: { translation, translationKey },
    };
    dispatch(action);
  }

  function getTranslationKey() {
    return state.translationKey;
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
