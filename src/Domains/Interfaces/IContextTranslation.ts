import SupportedLangugesEnum from "../Enums/AppTranslationEnums";

export interface IAppTranslation {
  translation: any;
  translationKey: SupportedLangugesEnum.It,
  translationOnCookies: boolean,
  updateTranslation: (LanguageCode: SupportedLangugesEnum) => void;
  getTranslationKey: () => SupportedLangugesEnum;
}

export interface IStateTranslation{
  translation: any;
  translationOnCookies: boolean,
  updateTranslation: (LanguageCode: SupportedLangugesEnum) => void;
  getTranslationKey: () => SupportedLangugesEnum;
}

