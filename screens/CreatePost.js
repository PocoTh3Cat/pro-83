import React, { Component } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-paper';

export default class CreatePost extends Component{
    constructor() {
        super();
        this.state = {
            caption: "",
            dropdownHeight: 40,
            previewImage: require("../assets/image_1.jpg"),
            preview_images: {
                image_1: require("../assets/image_1.jpg"),
                image_2: require("../assets/image_2.jpg"),
                image_3: require("../assets/image_3.jpg"),
                image_4: require("../assets/image_4.jpg"),
                image_5: require("../assets/image_5.jpg"),
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View stlye={styles.appTitle}>
                    <View style={styles.appTitleTextContainer}>
                        <View style={styles.appIcon}>
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.iconImage}
                            ></Image>
                        </View>
                        <Text style={styles.appTitleText}>New Post</Text>
                    </View>
                </View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <View style={styles.previewImageContainer}>
                            <Image
                                source={this.state.previewImage}
                                style={styles.previewImage}
                            ></Image>
                        </View>
                        <View style={{ height: RFValue(this.state.dropdownHeight), marginTop: 20,}}>
                            <DropDownPicker
                                items={[
                                    { label: "Image 1", value: "image_1"},
                                    { label: "Image 2", value: "image_2"},
                                    { label: "Image 3", value: "image_3"},
                                    { label: "Image 4", value: "image_4"},
                                    { label: "Image 5", value: "image_5"},
                                    { label: "Image 6", value: "image_6"},
                                    { label: "Image 7", value: "image_7"},                                    
                                ]}
                                
                                defaultValue={this.state.previewImage}

                                containerStyle={{
                                    height: 40,
                                    borderRadius: 20,
                                    marginBottom: 10,
                                }}
                                open={this.state.dropdownHeight == 170 ? true : false}

                                onOpen={() => {
                                    this.setState({dropdownHeight: 170})
                                }}

                                onClose={() => {
                                    this.setState({ dropdownHeight: 40});
                                }}

                                style={{
                                    backgroundColor: "grey",
                                    borderWidth: 1,
                                    borderColor: "white",
                                    
                                }}
                                
                                
                                itemStyle={{
                                    justifyContent: "flex-start"
                                }}

                                dropDownStyle={{backgroundColor: "white"}}


                                labelStyle={{
                                    color: "white"
                                }}

                                arrowStyle={{
                                    color: "white"
                                }}

                                onChangeItem={item =>
                                    this.setState({
                                        previewImage: item.value
                                    })
                                }
                            />
                        </View>
                        <TextInput
                            style={styles.inputFont}
                            onChangeText={caption => this.setState({ caption: TextInput.Text})}

                            placeholder={"Caption"}
                            placeholderTextColor={"black"}
                        />
                    </ScrollView>
                </View>
                <View style={{ flex: 0.08 }}></View>
            </View>
        );
        }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appTitle: {

    },
    appIcon: {
        display: "flex",
        top: 50,
        right: "80%",
        justifyContent:"",
        alignItems: "center",
    },
    iconImage: {
        height: RFValue(40),
        width: RFValue(40),
    },
    appTitleTextContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    appTitleText: {
        fontSize: 50,
        color: "white"
    },
    previewImageContainer: {
        marginTop: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    previewImage: {
        // height: 30,
        height: RFValue(200),
        width: RFValue(300),
        borderRadius: 10,
    },
    inputFont: {
        marginTop: 20,
        backgroundColor: "grey",
    }
});
