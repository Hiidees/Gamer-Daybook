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
import useCookies from "../../Hooks/useCookies";

interface IProviderProps {}

function AppTranslationProvider(
  props: React.PropsWithChildren<IProviderProps>
) {
  const { children } = props;
  let data;
  let key;

  if (useCookies.getCookie("language") === "Italiano") {
    data = ItDataTranslation;
    key = SupportedLangugesEnum.It;
  } else {
    data = EnDataTranslation;
    key = SupportedLangugesEnum.En;
  }
  const initialState: IAppTranslation = {
    translation: data,
    translationKey: key,
    translationOnCookies: Boolean(useCookies.getCookie("language")),
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

    useCookies.setCookie("language", translationKey);

    const action: IAction = {
      type: AppTranslationAction.updateTranslation,
      payload: {
        translation,
        translationKey,
        translationOnCookies: Boolean(useCookies.getCookie("language")),
      },
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
        translationOnCookies: state.translationOnCookies,
        updateTranslation: updateTranslation,
        getTranslationKey: getTranslationKey,
      }}
    >
      {children}
    </AppTranslationUIStore.Provider>
  );
}

export { AppTranslationProvider };
