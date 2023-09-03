import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token:"",
    isAuthenticated:false
}

const authSlice = createSlice(
    {
        name:"authentication",
        initialState:initialState,
        reducers:{
            login(state,action){
                console.log("action.payload = " + action.payload)
                console.log("action.type = " + action.type)
                state.token = action.payload
                state.isAuthenticated = true
            },
            logout(state){
                state.token = ""
                state.isAuthenticated = false
            }
        }
    }
)

export const authActions = authSlice.actions

export default authSlice.reducer