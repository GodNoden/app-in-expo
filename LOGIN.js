import React, {useState} from 'react';
import {Button, StyleSheet, TextInput} from 'react-native';
import {View, Text, Image} from 'react-native';

export default function LOGIN({navigation}) {
  const [codigo, setCodigo] = useState('');
  const [nip, setNip] = useState('');
  //rconst navigation = useNavigation();

  btnClick = () => {
    //navigation.navigate('pantallab');

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        console.log(xhttp.responseText);
        if (xhttp.responseText == 0) {
          //error alert
        } else {
          let resultado = xhttp.responseText;
          let datos = resultado.split(',');
          console.log(datos[1]);
          console.log(datos[2]);
          pantallab();
          // navigation.navigate('pantallab', {
          //   nombre: datos[2],
          //   codigo: datos[1],
          // });
        }
      }
    };

    xhttp.open(
      'GET',
      'http://148.202.152.33/ws_claseaut.php?codigo=' +
        '218744678' +
        '&nip=' +
        'noe6847927',
      true,
    );
    // if (condition) {
      
    // }
    xhttp.send();
  };

  const pantallab = () => {
    navigation.navigate('control');
  };

  return (
    <View>
      <Text style={styles.textoudg}> UDG </Text>
      <Image style={styles.logo} source={require('./Images/udg.png')} />
      <TextInput
        style={styles.input}
        placeholder="Codigo"
        onChangeText={codigo => setCodigo(codigo)}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="NIP"
        onChangeText={nip => setNip(nip)}
        secureTextEntry={true}></TextInput>
      <View style={styles.button}>
        <Button
          title="Entrar"
          onPress={btnClick}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    marginTop: 20,
    marginLeft: 140,
  },
  input: {
    borderWidth: 2,
    fontSize: 30,
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 300,
    resizeMode: 'center',
    marginLeft: 110,
  },
  textoudg: {
    fontSize: 30,
    color: 'orange',
    textAlign: 'center',
  },
});
