import React from "react";
import { assert } from "chai";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import App from "../src/App"; // Component to Test

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("Test Component", () => {
  it("render correctly App component", () => {
    const AppComponent = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).exists();
    assert(AppComponent === true);
  });
});
