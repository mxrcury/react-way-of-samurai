import { messageReducer } from "./Reducers/messageReducer";
import { profileReducer } from "./Reducers/profileReducer";




export const store = {
  _state:{
    messagesPage:{
      chatsData:[
        { id: 1, name: "Dmytro" },
        { id: 2, name: "Lorem" },
        { id: 3, name: "Steven" },
        { id: 4, name: "Lianka" },
        { id: 5, name: "Gonchar" },
        { id: 6, name: "Sunfire" },
        { id: 7, name: "Jerry" },
        { id: 8, name: "Mercury" },
      ],
      messagesData:[
        { id: 1, message: "Hello World!" },
      ],
      messageText:''
    },
    profilePage:{
      postsData:[
      ],
      newPostTitle:'',
      newPostText:''
    },
    sidebar:{
      navList:[
        {id:1,pageName:'Profile',pageLink:'profile'},
        {id:2,pageName:'Messages',pageLink:'messages'},
        {id:3,pageName:'News',pageLink:'news'},
        {id:4,pageName:'Music',pageLink:'music'},
        {id:5,pageName:'Settings',pageLink:'settings'},
        // {id:5,pageName:'Friends',pageLink:'friends'},
      ],
      friendList:[
        {id:1,name:'Waaecks'},
        {id:2,name:'Dmytro'},
        {id:2,name:'Liaaanka'}
      ]
    }
  },
  _subscriber(){
    console.log('Hi');
  },
  getState(){
    return this._state
  },
  subscribe(observer){
    this._subscriber = observer;
  },
  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage,action)
    this._state.messagesPage = messageReducer(this._state.messagesPage,action)
    this._subscriber(this._state)
  }
}