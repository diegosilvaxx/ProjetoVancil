import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Content } from "./styles";

// import { Container } from './styles';

export default function AuthLayout({ children }) {
  return (
    <>
      <div
        style={{
          height: "8%",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <ul style={{ height: "30px", marginRight: "40px" }}>
          <li style={{ marginTop: "5px" }}>
            <a href="tel:1935939999" style={{ color: "white" }}>
              <img
                src="http://vansil.com.br/wp-content/uploads/2017/06/telefone-icon.svg"
                style={{ height: "100%" }}
              />
              19-3593-9999
            </a>
          </li>
          <li style={{ color: "white", marginTop: "7px" }}>|</li>
          <li style={{ color: "white", marginTop: "7px" }}>
            <a href="mailto:sac@vansil.com.br" style={{ color: "white" }}>
              sac@vansil.com.br
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
