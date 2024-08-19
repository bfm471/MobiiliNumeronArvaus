import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [challenge, setChallenge] = useState('Arvaa numero väliltä 1 - 100');
  const [guess, setGuess] = useState('');
  const [correct, setCorrect] = useState(Math.floor(Math.random() * 100));
  const [guesses, setGuesses] = useState(0);

  const handleArvaa = () => {
    let arvaus = guess;
    let arvauksia = guesses + 1;
    setGuesses(arvauksia);
    setGuess('');
    if (Number(guess) < correct) {
      setChallenge(`Arvauksesi ${arvaus} on alakanttiin`);
    } else if (Number(guess) > correct) {
      setChallenge(`Arvauksesi ${arvaus} on yläkanttiin`)
    } else {
      Alert.alert(`Onnea!`, `Arvasit oikein ${arvauksia}. yrityksellä!`)
      setChallenge('Arvaa numero väliltä 1 - 100');
      setGuesses(0);
      setGuess('');
      setCorrect(Math.floor(Math.random() * 100));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{challenge}</Text>
      <TextInput
        style={styles.input}
        value={guess}
        onChangeText={text => setGuess(text)}
        keyboardType='numeric'
        selectTextOnFocus={true}
      />
      <Button title='Arvaa!' onPress={handleArvaa} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    width: 100,
    padding: 10,
    fontSize: 20,
  },
});
