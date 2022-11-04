import { ReactNode } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { setupStore } from "store/store";

export const renderWithRedux = (component: ReactNode, options: any) => {
  const store = setupStore(options?.initialState);

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={[options.route]}>{component}</MemoryRouter>
    </Provider>
  );
};
