import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/user';
interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
};

const USER_STORAGE_KEY = '@user_session';

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isLoggedIn = true;

            // Save in AsyncStorage (without await because is a reducer)
            AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(action.payload)).catch(e => {
                console.error('Error saving user session', e);
            });
        },
        logout(state) {
            state.user = null;
            state.isLoggedIn = false;

            AsyncStorage.removeItem(USER_STORAGE_KEY).catch(e => {
                console.error('Error clearing user session', e);
            });
        },
        restoreSession(state, action: PayloadAction<User | null>) {
            state.user = action.payload;
            state.isLoggedIn = action.payload !== null;
        },
    },
});

export const { login, logout, restoreSession } = authSlice.actions;

export default authSlice.reducer;
