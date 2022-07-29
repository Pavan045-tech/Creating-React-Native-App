import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View , Text, TextInput, SafeAreaView, StyleSheet, Button } from "react-native";

export const Car =()=>{
    return(
        <View >
             <SafeAreaView>
                <Text>Hi I'm Car Registration Page</Text>
                <Text>Please Enter the name :</Text>
                <TextInput placeholder="Name" style={styles.input_feild}></TextInput>
                <Button style={styles.submit}>hfhfggf</Button>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    input_feild : {
            Color:'#009400',
            borderWidth:'5',
            borderColor:'black',
            backgroundColor:'rgba(0,0,0,0.8)',
            borderRadius:'5px',
    },
    submit:{
        color:'red',
        backgroundColor:'none',
    }
    
  });