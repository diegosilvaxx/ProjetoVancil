import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import "~/styles/headerCSS.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as authActionCreators from "~/store/modules/auth/actions";
import * as modalActionCreators from "~/store/modules/modal/actions";
import store from "~/store";
import { bindActionCreators } from 'redux';


class ModalClose extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  handleSignOut() {
    store.dispatch(authActionCreators.signOut(false));
  }

  closeModal() {
    store.dispatch(modalActionCreators.closeModal(false));
  }


  render() {
    return (
      <Modal onHide={this.closeModal} show={store.getState().modal.show}>
        <Modal.Header closeButton>
          <Modal.Title>{store.getState().modal.mensagem.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{store.getState().modal.mensagem.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal} >
            Close
          </Button>
          {store.getState().modal.mensagem.type == "Alert" && <Button onClick={this.handleSignOut}>Ok</Button>}
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = store => ({
  modal: store.modal,
  auth: store.auth
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authActionCreators, modalActionCreators }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalClose)

