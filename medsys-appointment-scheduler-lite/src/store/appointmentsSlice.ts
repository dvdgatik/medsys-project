import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Appointment, AppointmentStatus } from '../types';

interface AppointmentState {
  appointments: Appointment[];
}
interface UpdateStatusPayload {
  id: string;
  status: AppointmentStatus;
}

const APPOINTMENTS_INITIALIZER: Appointment[] = [
  {
    id: "1",
    date: "2024-12-20",
    doctor: "Dr. Smith",
    notes: "General check-up",
    status: 'Pending'
  },
  {
    id: "2",
    date: "2025-07-22",
    doctor: "Dr. Martinez",
    notes: "Annual physical",
    status: 'Confirmed'
  },
  {
    id: "3",
    date: "2025-07-25",
    doctor: "Dr. Gomez",
    notes: "Blood pressure control",
    status: 'Pending'
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
    updateAppointment(state, action: PayloadAction<UpdateStatusPayload>) {
      const { id, status } = action.payload;
      const appointment = state.appointments.find((appt) => appt.id === id);
      if (appointment) {
        appointment.status = status;
      }
    }
  },
});

export const { addAppointment, removeAppointment, updateAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;

