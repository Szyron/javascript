import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'szamlalo',
    initialState:{
        value: 0,
    },
    reducers:{ //fugvenyek
        novel:(state)=>{
            state.value  += 1;
        },
        csokkent:(state)=>{
            state.value -= 1;
        },
        noveloErtekkel:(state,action)=>{
            state.value+=action.payload; //novel x-szel majd a statebe menti
        }
    }
})

export const{novel,csokkent,noveloErtekkel} = counterSlice.actions; //ezek a fuggvenyek(vegrehajtashoz szolg)

export default counterSlice.reducer
