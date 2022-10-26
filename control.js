import { Button, Text, View } from "react-native";
import React, { Component } from "react";

export default class control extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Bienvenido {this.props.route.params.nombre}</Text>
        <Text>Codigo: {this.props.route.params.codigo}</Text>
        <Button title="Altas" onPress={() => navigation.navigate("altas")}></Button>
        <Button title="Bajas" onPress={() => navigation.navigate()}></Button>
        <Button title="Cambio" onPress={() => navigation.navigate()}></Button>
        <Button title="Lista" onPress={() => navigation.navigate("pantallab", nombre:this.props.route.params.nombre, codigo:this.props.route.params.codigo)}></Button>
      </View>
    );
  }
}
