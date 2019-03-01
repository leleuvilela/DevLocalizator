import React from 'react';
import PropTypes from 'prop-types';

import { LeftBar } from './styles';

import { connect } from 'react-redux';
import { Creators as DevActions } from '../../store/ducks/devs';
import { bindActionCreators } from 'redux';

const ListaDevs = ({ devs, removeDev }) => (
  <LeftBar>
    <p>Lista de Devs</p>
    <ul>
      {devs.map(dev => (
        <li key={dev.id}>
          <div>
            <img src={dev.avatar} alt="" />
            <div className="user-info">
              <h2>{dev.name}</h2>
              <h3>{dev.login}</h3>
            </div>
            <button onClick={() => removeDev(dev.id)} className="remove">
              <i className="fa fa-times-circle" />
            </button>
            <a href={dev.url} className="go-to-page">
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </li>
      ))}
    </ul>
  </LeftBar>
);

ListaDevs.propTypes = {
  devs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      login: PropTypes.string
    })
  )
};

const mapStateToProps = state => ({
  devs: state.devs.data
});

const mapDispatchToProps = dispatch => bindActionCreators(DevActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaDevs);
