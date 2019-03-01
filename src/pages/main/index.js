/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import MapGL, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DevActions } from '../../store/ducks/devs';
import { Creators as ModalActions } from '../../store/ducks/modal';
import ListaDevs from '../../components/ListaDevs';
import AddUser from '../../components/AddUser';
import { userInfo } from 'os';

class Main extends Component {
  // static propTypes = {
  //   addDevRequest: PropTypes.func.isRequired,
  //   devs: PropTypes.shape({
  //     loading: PropTypes.bool,
  //     error: PropTypes.oneOfType([null, PropTypes.string]),
  //     data: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         id: PropTypes.number,
  //         name: PropTypes.string,
  //         description: PropTypes.string,
  //         url: PropTypes.string
  //       })
  //     )
  //   })
  // };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -16.67628,
      longitude: -49.274845,
      zoom: 14
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleMapClick = e => {
    const [latitude, longitude] = e.lngLat;

    this.props.openModal(longitude, latitude);
  };

  render() {
    return (
      <Fragment>
        <ListaDevs />
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={
            'pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ'
          }
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {this.props.devs.data.map(dev => (
            <Marker
              latitude={dev.latitude}
              longitude={dev.longitude}
              key={dev.id}
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48
                }}
                src={dev.avatar}
              />
            </Marker>
          ))}
        </MapGL>
        <AddUser />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  devs: state.devs
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...DevActions, ...ModalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
