import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as DevActions } from '../../store/ducks/devs';

import './styles.scss';

import { Form } from './styles';

class AddUser extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      visible: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
      cordinates: PropTypes.arrayOf(PropTypes.number)
    }).isRequired,
    loading: PropTypes.bool,
    hideModal: PropTypes.func.isRequired,
    addDevRequest: PropTypes.func.isRequired
  };

  state = {
    userInput: ''
  };

  handleAddUser = async e => {
    e.preventDefault();

    const { coordinates } = this.props.modal;

    await this.props.addDevRequest(
      coordinates[0],
      coordinates[1],
      this.state.userInput
    );
    this.props.hideModal();
  };

  handleCancel = e => {
    e.preventDefault();
    this.props.hideModal();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.modal.visible}
        onRequestClose={this.handleCancel}
        contentLabel="Adicionar novo Usuário"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <h2>Adicionar novo Usuário</h2>
        <Form onSubmit={this.handleAddUser}>
          <input
            type="text"
            name="User"
            placeholder="Usuario no Github"
            value={this.state.userInput}
            onChange={e => this.setState({ userInput: e.target.value })}
          />
          <div className="buttons-container">
            <button type="Submit">Salvar</button>
            <button onClick={this.handleCancel}>Cancelar</button>
          </div>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  devs: state.devs
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ModalActions, ...DevActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
