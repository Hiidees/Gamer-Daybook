
interface IState {
  translation: any;
}

enum AppTranslationAction {
  getTranslationKey,
  updateTranslation,
}

interface IAction {
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
