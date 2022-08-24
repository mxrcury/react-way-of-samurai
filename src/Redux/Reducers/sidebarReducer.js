
const initialState = {
    navList:[
       {id:1,pageName:'Profile',pageLink:'profile'},
      {id:2,pageName:'Messages',pageLink:'messages'},
      {id:3,pageName:'News',pageLink:'news'},
      {id:4,pageName:'Music',pageLink:'music'},
      {id:5,pageName:'Settings',pageLink:'settings'},
      {id:6,pageName:'Users',pageLink:'users'}
      // {id:5,pageName:'Friends',pageLink:'friends'},
    ],
    friendList:[
      {id:1,name:'Waaecks'},
      {id:2,name:'Dmytro'},
      {id:2,name:'Liaaanka'}
    ]
}

export const sidebarReducer = (state = initialState, action) =>{
  return state;
  }