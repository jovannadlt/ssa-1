import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function App() {
  return (
    <View style={styles.imageContainer}>
      <div style={styles.outerBorder}>
      <div style={styles.rowHeader}>
      <div style={{ flex: 1, justifyContent: 'center', border: '1px solid black',  }}>
        <Text style={{ flex: 1, display: 'flex', textAlign: 'center', fontSize: '100%'}}>Sensor Sight Assist</Text></div>
        <div>
          <Text style = {{fontSize: '75%'}}>
            Sensor sight assist is a product used to ...
          </Text>
        </div>
      </div>
      <div style={styles.rowHeader}>
        image of our product
        <img></img>
      </div>
    </div>

    <div style={styles.outerBorder}>
      <div style={styles.rowHeader}>
      <div style={{ flex: 1, justifyContent: 'center', border: '1px solid black',  }}>
        <Text style={{ flex: 1, display: 'flex', textAlign: 'center', fontSize: '100%'}}>Mission Statement</Text></div>
        <div>
          <Text style = {{fontSize: '75%'}}>
            Our mission statement is...
          </Text>
        </div>
      </div>
      <div style={styles.rowHeader}>
        image of our product
        <img></img>
      </div>
    </div>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    flex: 1,
    padding: 50,
    border: '1px solid black',
  },
  outerBorder: {
    fontSize: '200%',
    padding: 20,
    marginTop: '1px',
    backgroundColor: 'green',
    borderRadius: '10px',
    border: '1px solid black',
    margin: '5px',
    display: 'flex',
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    color: 'white',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: '10px',
    fontSize: '70px',
    display: 'inline-block',
    margin: '0 10px',
    border: '1px solid black',
  },
  rowHeader: {
    color: 'white',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: '10px',
    fontSize: '70px',
    margin: '0 10px',
    border: '1px solid black',
  },
  body: {
    fontSize: 30,
    color: 'black',
    backgroundColor: 'yellow',
    borderRadius: '10px',
    border: '1px solid black',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default App;
