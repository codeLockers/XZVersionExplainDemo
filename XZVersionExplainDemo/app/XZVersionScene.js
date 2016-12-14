 'use strict';
 
 import React, { Component } from 'react';
 
 import {
   StyleSheet,
   View,
   ListView,
   Text,
   Image,
   Dimensions
 } from 'react-native';
 
 import XZVersionCell from './XZVersionCell.js'

 class XZVersionScene extends Component {

  static defaultProps = {
    
    dataArray:[
                {
                  'title':'最新试卷',
                  'content':'首页呈现最新试卷，让您阅卷完成过立即查看成绩',
                  'image':require('../image/lastpaper.png')
                },
                {
                  'title':'学情管理',
                  'content':'以往试卷、学科情况、学生学情都在这里，方便您随时查看班级详情',
                  'image':require('../image/studymanage.png')
                },
                {
                  'title':'通知中心',
                  'content':'班级、学生学情主动提醒，让您及时了解班级最新情况',
                  'image':require('../image/notification.png')
                },
                {
                  'title':'扫描登录电脑端',
                  'content':'手机扫描二维码登录电脑端出卷、阅卷，让您不需要再输入帐号密码',
                  'image':require('../image/scanlogin.png')
                },
                {
                  'title':'家校互联',
                  'content':'随时告知家长孩子在校学习情况，共同帮助孩子提高成绩',
                  'image':require('../image/homeschool.png')
                },
              ]
  }

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
    this.state = {
      dataSource:ds.cloneWithRows([...this.props.dataArray])
    };
  }

  //ListView_Methods
  _renderRow(rowData,sectionID,rowID,highlightRow){

    return (
      <XZVersionCell data={rowData}/>
      )
  }

  _renderHeader(){

    return(
      <View>
        <Image
        style={{width:Dimensions.get('window').width,height:Dimensions.get('window').width*(230/750)}}
        source={require('../image/header.png')}
        />
        <View style={{height:55,justifyContent: 'center',alignItems: 'center',}}>
          <Text style={{fontSize:18,color:'rgb(51,51,51)'}}>极课教师(V3.3.0)主要更新</Text>
        </View>
        <View style={{height:1,backgroundColor:'rgb(223,223,223)'}}></View>
      </View>
      )
  }

  _renderFooter(){
    return(
      <View style={{height:90,backgroundColor:'rgb(245,245,245)',}}>
        <View style={{height:1,backgroundColor:'rgb(223,223,223)'}}></View>
        <Text style={{fontSize:16,color:'rgb(175,180,185)',textAlign:'center',marginTop:20}}>如果发现信息有误，需要修改</Text>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{color:'rgb(74,77,84)',fontSize:18}}>请拨打官方客服热线:</Text>
            <View style={{backgroundColor:'white',height:20,marginLeft:10,borderRadius:10,flexDirection:'row'}}>
              <Image 
              style={{width:20,height:20}}
              source={require('../image/phone.png')}/>
              <Text style={{color:'rgb(0,131,255)',backgroundColor:'rgba(0,0,0,0)',marginHorizontal:5}}>400-1155-618</Text>
            </View>
          </View>
        </View>
      </View>
      )
  }

  _renderSeparator(sectionID,rowID,adjacentRowHighlighted){

    if (rowID == this.props.dataArray.length-1) {
      return
    }

    return(
      <View 
      style={{backgroundColor:'rgb(245,245,245)',height:10}}
      key={sectionID+rowID}>
      <View style={{height:1,backgroundColor:'rgb(223,223,223)'}}></View>
      <View style={{height:1,backgroundColor:'rgb(223,223,223)',marginTop:8}}></View>
      </View>
      )
  }

   render() {
     return (
       <ListView
       style={{flex:1,paddingTop:64}}
       dataSource={this.state.dataSource}
       renderHeader={this._renderHeader}
       renderFooter={this._renderFooter}
       renderSeparator={this._renderSeparator.bind(this)}
       renderRow={this._renderRow}
       />
     );
   }
 }
 
 const styles = StyleSheet.create({
 
 });
 
 
 export default XZVersionScene;