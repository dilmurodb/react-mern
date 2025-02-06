import {
    createSelector,
    createEntityAdopter 
} from "@reduxjs/toolkit";
import { apiSlice } from '../../app/api/apiSlice'

const userAdopter = createEntityAdopter({ })

const initialState = usersAdopter.getInitialState() 