import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const alertMyText = () => {
    Alert.alert(text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder='Type Something Here'
      />
      <Text style={styles.textDisplay}>
        You wrote: {text}  
      </Text>
      <Button
        onPress={() => {
          alertMyText();
        }}
        title="Press Me"
      />
      <ScrollView>
        <Text style={{fontSize:170}}>This text is so big! And so long! You have to scroll!</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '88%',
    borderWidth: 1,
    height: 50,
    padding: 10
  },
  textDisplay: {
    height: 50,
    lineHeight: 50
  }
});

export default App;