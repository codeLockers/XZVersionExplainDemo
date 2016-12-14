'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

class XZVersionCell extends Component {
  render() {

    return (
      <View style={{height:260,alignItems: 'center',}}>
      	<Text 
      	style={{fontSize:16,color:'rgb(51,51,51)',textAlign:'center',marginTop:20}}>
      	{this.props.data.title}</Text>
      	<Text
      	style={{fontSize:14,color:'rgb(85,89,95)',textAlign:'center',marginTop:15,marginHorizontal:55,lineHeight:20}}>
      	{this.props.data.content}</Text>
      	<Image 
      	style={{width:150,height:150,marginTop:12}}
      	source={this.props.data.image}
      	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default XZVersionCell;