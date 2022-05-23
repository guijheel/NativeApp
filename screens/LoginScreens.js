import { View ,StyleSheet, Text } from 'react-native'
import React, {useState} from 'react'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'

const LoginScreens = ({ navigation }) => {
    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);

 const signIn = () => {

 }
    return (
    <KeyboardAvoidingView  behavior='padding' enable style={styles.container}>
        <StatusBar style='light'/>
        <Image 
        source={{
                uri:"https://www.coyotemag.fr/wp-content/uploads/2021/05/Overlord-S4.jpg",
            }}
            style={{ width : 200, height: 200, marginBottom:15,marginTop:5,}}
        />

        <View style={styles.InputContainer}>
            <Input placeholder='Email' autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)}/>
            <Input placeholder='Password' secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)}/>
        </View>

        <View style={styles.ButtonContainer}>
            <Button  containerStyle={styles.ButtonLogin} title='Login'  onPress={signIn}/>
            <Button   containerStyle={styles.ButtonRegister} title='Register' type='outline' onPress={() => navigation.navigate('Register')}/>
        </View>
        <View style={styles.TextContainer}>
           <Text>
               OR
           </Text>
        </View>
        <View style={styles.ButtonContainerSocial}>
            <Button containerStyle={styles.ButtonGoogle} title='Google'/>
            <Button containerStyle={styles.ButtonFacebook} title='Facebook' type='outline'/>
            <Button containerStyle={styles.ButtonTwitter} title='Twitter' />
        </View>
        <View style={{height: 100}}/>
    </KeyboardAvoidingView>
  )
}

export default LoginScreens;

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
    ButtonLogin:{
        marginBottom:5,
    },
    ButtonRegister:{

    },
   ButtonContainer:{
        width: "65%",
        marginBottom:15,
   },
   TextContainer:{

   },
   ButtonContainerSocial:{
    width: "65%",
    marginTop:15,
   },
   ButtonGoogle:{
    marginBottom:5,
   },
   ButtonFacebook:{
    marginBottom:5,
   },
   ButtonTwitter:{
    marginBottom:5,
   },
})