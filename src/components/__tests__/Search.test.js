import React from "react";
import { render,waitFor } from "@testing-library/react";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { RESDATA } from "../../constants";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESDATA);
    },
  });
});
test("Shimmer is loaded", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
    
  // const shimmer = body.getAllByTestId('shimmer');
  // expect(shimmer.length).toBe(10)

  
  await waitFor(() => expect(body.getByTestId("search-btn")));


  const resData = body.getByTestId("res-data");


  const input = body.getByTestId("search-input");
  expect(resData.children.length).toBe(20);
});
