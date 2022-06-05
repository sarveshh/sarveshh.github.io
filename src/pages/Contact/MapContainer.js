import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { Box, Typography } from "@mui/material";

const mapStyles = {
  width: "40vw",
  height: "55vh",
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 19.076,
          lng: 72.8777,
        }}
        containerStyle={{
          height: "55vh",
          width: "40vw",
          position: "relative",
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Mumbai, Maharashtra, India"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <Box>
            <Typography variant="h4">
              {this.state.selectedPlace.name}
            </Typography>
          </Box>
        </InfoWindow>
      </Map>
    );
  }
}

MapContainer = GoogleApiWrapper({
  apiKey: "AIzaSyCuwENWB9D1yZo1W0VONjWq4osmBhL4mF8",
})(MapContainer);
