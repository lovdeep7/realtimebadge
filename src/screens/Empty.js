import React from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import AppStyles from '../styles/Styles';

export class Empty extends React.Component {
  static navigationOptions = {
    headerTitle: "Empty"
  };
  render() {
    return (
      <SafeAreaView>
        <StatusBar
        backgroundColor={AppStyles.colors.accentColor}
        barStyle={AppStyles.barStyle}
        />
        <Text>Empty screen.</Text>
      </SafeAreaView>
    );
  }
}



export default Empty;