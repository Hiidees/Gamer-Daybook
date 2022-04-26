
interface IState {
  translation: any;
}

export enum AppTranslationAction {
 // getTranslationKey,
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
      };

    default:
      return state;
  }
}
