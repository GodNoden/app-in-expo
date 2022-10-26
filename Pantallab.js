import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Pantallab({ navigation, route }) {
  const [users, setUsers] = useState("");

  useEffect(() => {
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status) {
        console.log(xhttp.responseText);
        var myArr = JSON.parse(this.responseText);
        setUsers(myArr);
      }
    };
    xhttp.open(
      "GET",
      "https://myawesomewebsitebynoe.000webhostapp.com/mostrarDatos.php",
      true
    );

    xhttp.send();
  }, []);

  const getItem = (user) => {
    navigation.navigate('pantallac', (user.id, user.nombre, user.codigo, user.tarea));
  };

  return (
    users?.length > 0 && (
      <View>
        <ScrollView>
          {users.map((user) => {
            return (
              <TouchableOpacity
                onPress={() => getItem(user)}
                style={{ margin: 10, borderWidth: 0.5, padding: 10 }}
              >
                <Text
                  style={{ color: "black", fontsize: 16, fontWeight: "bold" }}
                >
                  User {user.id}
                </Text>
                <Text style={{ color: "black" }}>Nombre : {user.nombre} </Text>
                <Text style={{ color: "black" }}>Tarea : {user.codigo} </Text>
                <Text style={{ color: "black" }}>Codigo : {user.tarea} </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    )
  );
}
