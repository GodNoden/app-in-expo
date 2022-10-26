import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Pantallac({ navigation, route, user }) {
  return (
    <View>
      <Text style={{ color: "red", fontsize: 16, fontWeight: "bold" }}>
        User {user.id}
      </Text>
      <Text style={{ color: "red" }}>Nombre : {user.nombre} </Text>
      <Text style={{ color: "red" }}>Tarea : {user.codigo} </Text>
      <Text style={{ color: "red" }}>Codigo : {user.tarea} </Text>
    </View>
  );
}
