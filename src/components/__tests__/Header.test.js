import { render } from "@testing-library/react";
import Header from "../Header";
import React from "react";
import store from "../../utils/store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";

test("Logo shoud load", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

//   console.log(header);
  const logo = header.getByTestId("logo");
  expect(logo.src).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq_LmiEG7PEV3p9MGjSYDxsn1BzvEy5fEdg&s");
  

  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.textContent).toBe('✅');


  const cart = header.getByTestId("cart");
  expect(cart.textContent).toBe('0');
});
