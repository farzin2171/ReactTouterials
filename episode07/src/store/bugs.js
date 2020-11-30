import {createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {apiCall} from './api'

let lastId=0;
const slice=createSlice({
    name:"bugs",
    initialState:{
        list:[],
        loading:false,
        lastFetch:null
    },
    reducers:{
        bugsRequested:(bugs,action)=>{
          bugs.loading=true;
        },
        bugsRequestFailed:(bugs,action)=>{
          bugs.loading=false;
        },
        bugsRecived:(bugs,action)=>{
           bugs.list= action.payload; 
           bugs.loading=false;
           bugs.lastFetch=Date.now()
        },
        bugAssignedToUser:(bugs,action)=>{
            
            const {bugId,userId}=action.payload;
            
            let index=bugs.list.findIndex(bug=>bug.id===bugId);
             if(bugs.list[index])
             {
              bugs.list[index].userId=userId;
             }

        },
        bugAdded:(bugs,action)=>{
             bugs.list.push({
              id:++lastId,
              description:action.payload.description,
              resolved:false
            });
        },
        bugResolved:(bugs,action)=>{
           const index=bugs.list.findIndex(bug=>bug.id===action.payload.id)
           bugs.list[index].resolved=true;
        }
    }
});

export default slice.reducer;
export const{bugAdded,bugResolved,bugAssignedToUser,bugsRecived,bugsRequested,bugsRequestFailed}=slice.actions


//Action Creators
export const loadBugs=()=>(dispatch,getState)=>{
   const {lastFetch}= getState().entites.bugs;
   console.log("lastFetch",lastFetch);

   dispatch( apiCall({ 
      url:'/bug',
      method:'get',
      onStart:bugsRequested.type,
      onSuccess:bugsRecived.type,
      onError:bugsRequestFailed.type
    })
   );
}

export const addBug=bug=>apiCall({
    url:'bug',
    method:'post',
    data:bug,
    onSuccess:bugAdded.type

})





export const getUnresolvedBugs=createSelector(
        state =>state.entities.bugs,
        bugs=> bugs.filter(bug=> !bug.resolved)
)












