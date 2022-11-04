import { render } from "@testing-library/react";
import AppRoute from "components/routes/AppRoute";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { setupStore } from "store/store";

export const testingRender = (component?: ReactNode | null, options?: any) => {
  const store = setupStore(options?.initialState);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options.route]}>
        <AppRoute />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
