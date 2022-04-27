import SupportedLangugesEnum from "../Enums/AppTranslationEnums";

export interface IAppTranslation {
  translation: any;
  translationKey: SupportedLangugesEnum.It,
  updateTranslation: (LanguageCode: SupportedLangugesEnum) => void;
  getTranslationKey: () => SupportedLangugesEnum;
}

export interface IStateTranslation{
  translation: any;
  updateTranslation: (LanguageCode: SupportedLangugesEnum) => void;
  getTranslationKey: () => SupportedLangugesEnum;
}

