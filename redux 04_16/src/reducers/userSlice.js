import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

export const fetchUser= createAsyncThunk('users/fetchusers',async ()=>{
    const keres = await fetch('https://jsonplaceholder.typicode.com/users');
    return await keres.json(); 
});


const userSlice = createSlice({
    name:'users',
    initialState:{
        userList: [],
        loading: false,
        error: null,
    },

    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading=false
            state.userList=action.payload
        })
        .addCase(fetchUser.rejected,(state)=>{
            state.loading=false
            state.error="Hiba a letöltés során!"
        })
    }
})

export default userSlice.reducer;