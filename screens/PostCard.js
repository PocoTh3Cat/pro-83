import React, { Component } from "react";
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity,
    Platform, 
    SafeAreaView, 
    StyleSheet
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-ionicons";

let post = require("../temp_posts.json")

export default class PostCard extends Component {
    render(){

    return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.authorContainer}>
                    <View style={styles.authorImageContainer}>

                    </View>
                    <View style={styles.authorNameContainer}>
                        <Text style={styles.authorNameText}>{<Image
                            source={require("../assets/profile_img.png")}
                            style={styles.profileImage}
                        />}{this.props.post.author}</Text>
                    </View>
                </View>
                <Image 
                    source={require("../assets/post.jpeg")}
                    style={styles.postImage} 
                    />
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {this.props.post.caption}
                    </Text>
                </View> 
                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                        <Text style={styles.likeText}>12k</Text>
                    </View>
                </View>
            </View>
        </View>
        )
    }
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20),
      padding: 20,
    },
    profileImage: {
        width: RFValue(30),
        height: RFValue(30),
        borderRadius: 50,
    },
    postImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250),
      marginTop: 15,
    },
    authorNameContainer: {
        flex: 1,
        justifyContent: "center",
    },
    authorContainer: {
      paddingLeft: RFValue(20),
      justifyContent: "center",
    },
    storyTitleText: {
      fontSize: RFValue(25),
      fontFamily: "Bubblegum-Sans",
      color: "white",
    },
    authorNameText: {
      fontSize: RFValue(18),
      fontFamily: "Bubblegum-Sans",
      color: "white",
      marginTop: 5,
    },
    captionContainer: {
        flex: 1,
        alignItems: "center"
    },
    captionText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: 13,
      color: "white",
      paddingTop: RFValue(10),
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10),
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30),
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      marginLeft: RFValue(5),
    },
  });