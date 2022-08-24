import { connect } from 'react-redux'
import { sideBarCreator } from '../../Redux/Reducers/sidebarReducer'
import Navigation from './Navigation'

const mapStateToProps = (state) => (
    {
    navList:state.sidebar.navList,
    friendList:state.sidebar.friendList
})

const mapDispatchToProps = (dispatch) => {}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default NavigationContainer;