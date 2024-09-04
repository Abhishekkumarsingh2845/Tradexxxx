import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MainContainer from '../../Components/MainContainer';
import BackHeder from '../../Components/BackHeder';
import Strings from '../../Utlis/String';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ImagePaths from '../../Utlis/ImagePaths';
import {Color} from '../../Utlis/Color';
import axios from 'axios';

const Notification = () => {
  const Notifications = [
    {
      id: 1,
      title: 'Your VECS 25k order has been executed ',
      time: '5 min ago',
      logoImage: ImagePaths.greenLogo,
      execute: 'executed',
    },
    {
      id: 2,
      title: 'Your VECS 25k order has been executed ',
      time: '5 min ago',
      logoImage: ImagePaths.blueLogo,
      execute: 'executed',
    },
    {
      id: 3,
      title: 'Your VECS 25k order has been executed ',
      time: '5 min ago',
      logoImage: ImagePaths.greenLogo,
      execute: 'executed',
    },
    {
      id: 4,
      title: 'Your VECS 25k order has been executed ',
      time: '5 min ago',
      logoImage: ImagePaths.orangeLogo,
      execute: 'executed',
    },
    {
      id: 5,
      title: 'Your VECS 25k order has been executed ',
      time: '5 min ago',
      logoImage: ImagePaths.orangeLogo,
      execute: 'executed',
    },
    {
      id: 6,
      title: 'Your VECS 25k order has been executed ',
      time: '5 min ago',
      logoImage: ImagePaths.blueLogo,
      execute: 'executed',
    },
  ];
  return (
    <MainContainer>
      <BackHeder title={Strings.notification} />

      <View style={{marginTop: 10}}>
        <Text style={styles.dayStyle}>{Strings.today}</Text>
        <FlatList
          data={Notifications}
          keyExtractor={(_, index) => index?.toString()}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.mainContainerStyle}>
                <View style={styles.mainViewStyle}>
                  <Image
                    source={item.logoImage}
                    style={styles.logoImageStyle}
                  />

                  <Text style={styles.titleStyle}>{item.title}</Text>
                </View>
                <View style={{alignSelf: 'flex-end'}}>
                  <Text style={styles.timeStyle}>{item.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </MainContainer>
  );
};

export default Notification;

const styles = StyleSheet.create({
  dayStyle: {
    fontSize: 14,
    color: Color.black,
  },
  mainContainerStyle: {
    backgroundColor: Color.white,
    borderRadius: 10,
    marginTop: 10,
    padding: 5,
  },
  mainViewStyle: {
    marginTop:5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImageStyle: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: 13,
    color: Color.black,
    marginLeft: 10,
  },
  itemExecute: {
    fontSize: 12,
    color: Color.black,
  },
  timeStyle: {
    fontSize: 10,
    color:Color.lightgray
  },
});

/*import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const Notification = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      setData(response.data);
     // console.log(response.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const PostData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        {
          name: 'Amit singh',
          email: 'amit@gmail.com',
          address: '123 Main St',
          phone: '9876543210',
          website:' http://amitsingh.com'

        },
      );

      setData([response.data]);
      setLoading(false);
     // console.log(response.data); 
    } catch (e) {
      console.error(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const UpdateData=async()=>{

    try{
      setLoading(true)
      const response=await axios.put('https://jsonplaceholder.typicode.com/users',{
        name:'suarj thakur',
        email:'suarj@gmail.com',
         phone: '100',
        website:' http://suarjthakur.com'
        

      })
      setData(response.data)
      setLoading(false)
      console.log([response.data])

    }catch(e){
      console.error(e)
    }finally{
      setLoading(false)
    }
  }
  return (
    <View style={{padding: 10}}>
      <TouchableOpacity
        onPress={() => {
          FetchData();
        }}
        style={{backgroundColor: 'orange', borderRadius: 10, padding: 10}}>
        <Text style={{color: 'white'}}>GetData.....</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          PostData();
        }}
        style={{
          backgroundColor: 'green',
          borderRadius: 10,
          padding: 10,
          marginTop: 20,
        }}>
        <Text style={{color: 'white'}}>PostData.....</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
     UpdateData()
        }}
        style={{backgroundColor: 'black', borderRadius: 10, padding: 10,marginTop:20}}>
        <Text style={{color: 'white'}}>UpdateData.....</Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator color="blue" />}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: 'lightyellow',
              padding: 10,
              marginTop: 10,
              borderRadius: 10,
            }}>
            <Text style={{color: 'black'}}>{item.id}</Text>
            <Text style={{color: 'green'}}>{item.name}</Text>
            <Text style={{color: 'blue'}}>{item.email}</Text>
            <Text style={{color: 'blue'}}>{item.phone}</Text>
            <Text style={{color: 'blue'}}>{item.website}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});

/*import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const Notification = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      setData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const PostData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        {
          id: 11,
          name: 'Amit singh',
          username: 'Amit',
          email: 'amit@gmail.com',
          phone: '9876543210',
        },
      );
      setData(prev => [...prev, response.data]);
      console.log(response.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const UpdateData = async () => {
    try {
     const userid=3;
     const selecteddata= data.filter(user=>user.id == user.id)
     const filtereddata=selecteddata[0]
      const payload={
        ...filtereddata,
        name:'amit singh',
        phone:"7876863964",
      }
     

      setLoading(true);
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${userid}`,
        payload,
      );

      setData(prev =>
        prev.map(item => (item.id == userid ? response.data : item)),
      );
    
      setLoading(false);
      console.log([response.data]);
    } catch (e) {-
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <View style={{marginTop: 20, padding: 10}}>
      <View>
        <TouchableOpacity
          onPress={() => {
            FetchData();
          }}
          style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}>
          <Text style={{color: 'white'}}>get data...</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            PostData();
          }}
          style={{
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <Text style={{color: 'white'}}>send data...</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            UpdateData();
          }}
          style={{
            backgroundColor: 'orange',
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
            marginBottom:10
          }}>
          <Text style={{color: 'white'}}>update data...</Text>
        </TouchableOpacity>

      
      </View>
      {loading && <ActivityIndicator color="red" />}
      <FlatList
        data={data}
       keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: 'lightgray',
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
            }}>
            <Text style={{color: 'gray'}}>{item.id}</Text>
            <Text style={{color: 'black'}}>{item.name}</Text>
            <Text style={{color: 'black'}}>{item.username}</Text>
            <Text style={{color: 'blue'}}>{item.email}</Text>
            <Text style={{color: 'green'}}>{item.phone}</Text>
         
          <TouchableOpacity
          onPress={()=>{
             setData(prev=>prev.filter(user=>user.id !==item.id))
             console.log('deleted id is ',item.id)
          
           }}
           style={{
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <Text style={{color: 'white'}}>delete data...</Text>
        </TouchableOpacity> 
        </View>
        )}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});

 







 
*/
