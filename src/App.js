import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Button, FlatList, StyleSheet, Text, ActivityIndicator } from "react-native";
import axios from "axios";
import UserCard from "./components/UserCard/UserCard";


const URL = 'https://jsonplaceholder.typicode.com/users'

function App () {

  // async function fetchData(){
    //const response =
    // axios
    // .get('https://jsonplaceholder.typicode.com/users')
    // .then(response => console.log(response))
    // .catch(error => console.log(error))
    // axios.post('https://jsonplaceholder.typicode.com/users',{})

    //console.log(response)

  //   console.log("1")

  //   const response = await axios
  //   .get('https://jsonplaceholder.typicode.com/users')
  //   console.log("3")
  //   console.log(response)
  // }

  // console.log("2")

  const [userList, setUserList] = useState([])
  const [ loading, setLoading ] = useState(false)
  async function fetchData(){
    setLoading(true)
    const response = await axios.get(URL)
    setLoading(false)
    setUserList(response.data)
  }
  // async function fetchData(){
  //   axios.get(URL).then(response=>{
  //     setLoading(false)
  //     setUserList(response.data)
  //   })
  // }

  const renderUser = ({item}) =><UserCard name={item.name} email= {item.email} username= {item.username}/>;

  useEffect (()=>{
    fetchData()
  },[])
  return(
    <SafeAreaView style={styles.container}>
      <View style= {styles.container}>
        <Text style={styles.info}>PLEASE PUSH FETCH DATA BUTTON</Text>
        {
          loading ? (<ActivityIndicator size="xlarge"/>) :
          (<FlatList
          data={userList}
          renderItem={renderUser}
        />)}
        <Button color={"black"} title="Fetch Data" onPress={fetchData}/>
      </View>
    </SafeAreaView>
  )
}



export default App



const  styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"pink"
  },
  info:{
    color: 'azure',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor:"black",
    margin:20,
    borderRadius:15,
    padding:10,
    
  },


});