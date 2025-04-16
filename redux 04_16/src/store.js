import  {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice'; //importaljuk a counterSlice-t
import userReducer from './reducers/userSlice'; //importaljuk a userSlice-t




export default configureStore({
    reducer:{
        szamlalo: counterReducer, //itt a counterSlice-t importaljuk
        users: userReducer,
    }
})