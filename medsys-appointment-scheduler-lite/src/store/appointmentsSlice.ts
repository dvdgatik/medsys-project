import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Appointment } from '../types/appointment';
interface AppointmentState {
  appointments: Appointment[];
}

const APPOINTMENTS_INITIALIZER = [
  {
    id: "1",
    date: "2024-12-20",
    doctor: "Dr. Smith",
    notes: "General check-up",
  },
  {
    id: "2",
    date: "2025-07-22",
    doctor: "Dr. Martinez",
    notes: "Annual physical",
  },
  {
    id: "3",
    date: "2025-07-25",
    doctor: "Dr. Gomez",
    notes: "Blood pressure control",
  },
];


const initialState: AppointmentState = {
  appointments: APPOINTMENTS_INITIALIZER,
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

