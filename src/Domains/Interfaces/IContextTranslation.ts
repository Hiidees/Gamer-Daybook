import SupportedLangugesEnum from "../Enums/AppTranslationEnums";

interface IAppTranslation {
  translation: any;
  updateTranslation: (LanguageCode: SupportedLangugesEnum) => void;
  getTranslationKey: () => string;
}

export default IAppTranslation;
