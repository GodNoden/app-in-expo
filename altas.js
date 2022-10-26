import { Button, Text, TextInput, View } from "react-native";
import React, { Component } from "react";

export default class altas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre:"",
            codigo:"",
            tarea:"",
            url:""
        };
      }
  render() {

    const btnAltas = () => {
        //search xml http request, w3school
        console.log(xhttp.responseText);
        if (xhttp.responseText === "1") {
            //alert de exito
        } else {
            //alert de error
        }
        //url de el script editada para hacer las query
    }

    return (
      <View>
        <Text>Altas</Text>
        <Text>Nombre</Text>
        <TextInput onChangeText={nombre => this.setState({nombre})}></TextInput>
        <Text>Codigo</Text>
        <TextInput onChangeText={nombre => this.setState({codigo})}></TextInput>
        <Text>Tarea</Text>
        <TextInput onChangeText={nombre => this.setState({tarea})}></TextInput>
        <Text>Url imagen</Text>
        <TextInput onChangeText={nombre => this.setState({url})}></TextInput>
        <Button title="Alta"></Button>
      </View>
    );
  }
}
