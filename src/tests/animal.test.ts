import { configureStore } from "@reduxjs/toolkit";
import { ActionsMiddleware, actionsMiddleware } from "./actionsMiddleware";
import animalReducer, { setName } from "../store/animal";

function createStore(middleware: ActionsMiddleware) {
  return configureStore({
    reducer: {
      animal: animalReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
  });
}

describe("animal test", () => {
  let store: ReturnType<typeof createStore>;
  let middleware: ActionsMiddleware;

  beforeEach(() => {
    middleware = actionsMiddleware();
    store = createStore(middleware);
  });

  afterEach(async () => {
    await middleware.clearActions();
  });

  it("saves only when conditions are met", async () => {
    store.dispatch(setName("cat"));

    let actions = await middleware.getActions();
    expect(actions).toHaveElementInArray(setName("cat"));
    expect(store.getState().animal.name).toBe("cat");

    await middleware.clearActions();

    actions = await middleware.getActions();
    expect(actions).not.toHaveElementInArray(setName("cat"));
    expect(store.getState().animal.name).toBe("cat");
  });
});
