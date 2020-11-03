import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import React, { Component } from "react";
import { Form } from "@unform/web";
import PesquisaDebito from "./pesquisaDebito";
import { Row, Col, Container } from "react-bootstrap";
import './styles.css'
import schema from "./schema";
import { bindActionCreators } from 'redux';
import * as pesquisaDebitoActionCreators from "~/store/modules/pesquisaDebito/actions";
import store from "~/store";

class index extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    store.dispatch(pesquisaDebitoActionCreators.getPesquisaDebito());
  }


  render() {
    return (
      <>
        <Container className="containerPD">
          <Row >
            <Col>
              <Form
                noValidate
                schema={schema}
              >
                <Row>
                  <PesquisaDebito />
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    pesquisaDebito: state.pesquisaDebito
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ pesquisaDebitoActionCreators }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(index) 
