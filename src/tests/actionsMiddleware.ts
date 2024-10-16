import { Middleware, Action, isAction } from "redux";

export interface ActionsMiddleware extends Middleware {
  getActions: () => Promise<Action[]>;
  clearActions: () => Promise<void>;
}

export const actionsMiddleware = () => {
  const actions: Action[] = [];

  const middleware: ActionsMiddleware = () => (next) => (action) => {
    if (isAction(action)) {
      actions.push(action);
    }
    return next(action);
  };

  middleware.getActions = async () => {
    return actions;
  };

  middleware.clearActions = async () => {
    actions.length = 0;
  };

  return middleware;
};
