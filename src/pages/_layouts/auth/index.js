import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Content } from "./styles";

export default function AuthLayout({ children }) {
  return (
    <>
      <div
        style={{
          height: "8%",
          backgroundColor: "#007bff",
          display: "flex",
          justifyContent: "flex-end",
          maxHeight: "60px"
        }}
      >
        <ul style={{ height: "30px", marginRight: "40px" }}>
          <li style={{ marginTop: "7px" }}>
            <a href="tel:1421088000" style={{ color: "white", width: "auto" }}>
              (14) 2108-8000
            </a>
          </li>
          <li style={{ color: "white", marginTop: "7px" }}>|</li>
          <li style={{ color: "white", marginTop: "7px" }}>
            <a href="www.paschoalotto.com.br" style={{ color: "white" }}>
              www.paschoalotto.com.br
            </a>
          </li>
        </ul>
      </div>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};
