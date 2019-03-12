//import liraries
import React, { Component } from 'react';
import {inject,observer} from 'mobx-react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import style from '../../style/index'
import Header from '../../components/header'
import Category from '../../components/category'
import HeaderTxt from '../../components/txtHeader'
import Schedule from '../../components/schedule'
import Classroom from '../../components/classroom'
import PHeader from '../../components/pheader'

@inject("schedule","environment","auth")
@observer
// create a component
class HomeScreen extends Component {
    componentDidMount(){
        const {uid}=this.props.auth;
        this.props.environment.fetchEnvironmentToArray(req=>{
            const {term}=this.props.environment;
            console.log(term);
            if(term){
                this.props.schedule.fetchData(term.key,'wM0b617idwIsFW9ssEWw');
                this.props.schedule.fetchStudentList(term.key,'A1CTPcmHjYv7tUnioCaB');
            }
        })
    }
    
    render() {
        _onProfile = ()=>{
            this.props.navigation.navigate("Profile")}
        _onDetails = ()=>{
            this.props.navigation.navigate("Details")} 
        _onSingOut=()=>{
            this.props.auth.logOut();
        }   
        return (
            
            <SafeAreaView style={[style.container, style.backgroundColor]}>
                <Header onClick={()=> _onProfile()} />
                
                <ScrollView showsVerticalScrollIndicator={false}>
                {/* <PHeader/> */}
                    <Category />
                    <HeaderTxt mainTxt="Classroom" subTxt="More" />
                   
                    <ScrollView horizontal="true" showsHorizontalScrollIndicator={false}>
                        <Classroom name="COM 204" />
                        <Classroom name="HIS 205" />
                        <Classroom name="PHI 107" />
                    </ScrollView>
                    <HeaderTxt mainTxt="Daily Schedule" />
                    <Schedule
                        onClick={_onDetails}
                        roomname="Battambang"
                        fromTime="09:30 am"
                        toTime="11:00 am"
                        teacher="Buth Sitha"
                        subject="ASEAN Goverments Politics and Economics"
                    />
                    <Schedule
                        roomname="Banteay Meanchey"
                        fromTime="09:30 am"
                        toTime="11:00 am"
                        teacher="Buth Sitha"
                        subject="ASEAN Goverments Politics and Economics"
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default HomeScreen;
