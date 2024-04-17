import React from "react";
import { View, Text, StyleSheet } from "react-native";



const UserCard = (props) => {
    return(
        <View  style={styles.upperContainer}> 
            <View style={styles.userContainer}>
                <Text style={styles.username}>{props.username}</Text>
                <View style={styles.container}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.email}>{props.email}</Text>
                </View>
            </View>
        </View>
    )
}

export default UserCard

const styles = StyleSheet.create({
    container: {
        
        backgroundColor:"lightgrey",
        marginVertical: 5,
        padding:5,
        borderRadius:10,
        width:'70%',
        alignItems:"center",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:10,
        borderWidth:3,
        borderColor:"gray",
    },
    upperContainer:{
        backgroundColor:"pink"
    },
    name:{
        fontWeight: "bold",
        fontSize:15,
    },
    email:{
        fontStyle: "italic",
        color:"darkblue",
        fontSize:15
    },
    username:{
        textAlign: 'center',
        fontWeight: "bold",
        fontSize:20,
        color: "black",
    },
    userContainer:{
        flex:1,
        backgroundColor: "azure",
        margin:10,
        borderRadius:10,
        padding:3,
        borderWidth:2,
        borderColor:"gray",
        width:"70%",
        marginLeft:"auto",
        marginRight:"auto",
    }
    
})


