import { createContext } from "react";
import IAppTranslation from "../../Domains/Interfaces/IContextTranslation";
import { default as ItDataTranslation } from "../Data/Translations/it.json";
import { default as EnDataTranslation } from "../Data/Translations/en.json";
import SupportedLangugesEnum from "../../Domains/Enums/AppTranslationEnums";

export default createContext<IAppTranslation>({} as IAppTranslation);

export class AppTranslationStore {
  private static _instance: AppTranslationStore;
  private _translation: any;
  private _translationKey: string;

  public get translationKey(): string {
    return this._translationKey;
  }

  public set translationKey(value: string) {
    this._translationKey = value;
  }

  public get translation(): any {
    return this._translation;
  }

  public set translation(languageCode: SupportedLangugesEnum) {
    switch (languageCode) {
      case SupportedLangugesEnum.En:
        this._translation = EnDataTranslation;
        this._translationKey = SupportedLangugesEnum.En;
        break;

      default:
        this._translation = ItDataTranslation;
        this._translationKey = SupportedLangugesEnum.It;
    }
  }

  public static getInstance(): AppTranslationStore {
    if (!AppTranslationStore._instance) {
      AppTranslationStore._instance = new AppTranslationStore();
    }

    return AppTranslationStore._instance;
  }

  private constructor() {
    this.translation = SupportedLangugesEnum.It;
    this._translationKey = "Italiano";
  }
}
