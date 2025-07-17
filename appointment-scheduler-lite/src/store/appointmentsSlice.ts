import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Appointment {
    id: string;
    date: string;
    doctor: string;
    notes?: string;
} 

interface AppointmentState {
    appointments: Appointment[];
}

const initialState: AppointmentState = {
    appointments: [],
}

const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        addAppointment(state, action: PayloadAction<Appointment>) {
            state.appointments.push(action.payload)
        },
        removeAppointment(state, action: PayloadAction<string>) {
            state.appointments = state.appointments.filter(appointment => appointment.id !== action.payload)
        },
    },
});

export const { addAppointment, removeAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;

