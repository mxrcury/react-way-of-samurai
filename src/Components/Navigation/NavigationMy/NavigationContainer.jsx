import { connect } from 'react-redux'
import { sideBarCreator } from '../../../Redux/Reducers/sidebarReducer'
import {setProfileId} from '../../../Redux/Reducers/profileReducer'
import Navigation from './Navigation'

const mapStateToProps = (state) => (
    {
    navList:state.sidebar.navList,
    friendList:state.sidebar.friendList
})


const NavigationContainer = connect(mapStateToProps, {setProfileId})(Navigation)

export default NavigationContainer;