import { View , Text,StyleSheet } from 'react-native'
import React, {useState , useLayoutEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Image } from 'react-native-elements'
import { KeyboardAvoidingView } from 'react-native'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const RegisterScreens = ({ navigation }) => {
    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);
    const [username, setUsername] = useState(String);
    const [passwordConfirmation, setPasswordConfirmation] = useState(String);
    const auth = getAuth();
    useLayoutEffect(() => {
      navigation.setOptions({
          headerBackTitle:"Back to Login",
      })
    
    }, [navigation]);

    const signUp = () =>{
        auth.createUserWithEmailAndPassword(email,password)
    }
       
  return (
    <KeyboardAvoidingView  behavior='padding' enable style={styles.container}>
        <StatusBar style='light'/>
        <Image 
        source={{
                uri:"https://w0.peakpx.com/wallpaper/939/552/HD-wallpaper-albedo-black-overlord-anime-love.jpg",
            }}
            style={{ width : 200, height: 200, marginBottom:15,marginTop:5,}}
        />

        <View style={styles.InputContainer}>
        <Input placeholder='Username' autoFocus type="text" value={username} onChangeText={(text) => setUsername(text)}/>
            <Input placeholder='Email' autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)}/>
            <Input placeholder='Password' secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)}/>
            <Input placeholder='Confirm Password' secureTextEntry type="password" value={passwordConfirmation} onChangeText={(text) => setPasswordConfirmation(text)}/>
        </View>

        <View style={styles.ButtonContainer}>
            <Button raised containerStyle={styles.ButtonRegister} title='Register'  onPress={signUp}/>
        </View>
      
        <View style={{height: 100}}/>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreens;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        padding: 10,
        backgroundColor:"white",
    },
    InputContainer: {
        width: "80%",
    },
    ButtonRegister:{
        marginBottom:5,
    },
   ButtonContainer:{
        width: "65%",
        marginBottom:15,
   },
})