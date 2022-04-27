import SupportedLangugesEnum from "../../../Domains/Enums/AppTranslationEnums";

interface IState {
  translation: any;
  translationKey: SupportedLangugesEnum;
  translationOnCookies: boolean;
}

export enum AppTranslationAction {
  updateTranslation,
}

export interface IAction {
  type: AppTranslationAction;
  payload: IState;
}

export default function reducer(state: IState, action: IAction): IState {
  const { type, payload } = action;

  switch (type) {
    case AppTranslationAction.updateTranslation:
      return {
        ...state,
        translation: payload.translation,
        translationKey: payload.translationKey,
        translationOnCookies: payload.translationOnCookies,
      };

    default:
      return state;
  }
}
