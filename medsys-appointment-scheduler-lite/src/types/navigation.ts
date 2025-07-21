import { Appointment } from './appointment';

export type RootStackParamList = {
    Login: undefined;
    AppointmentList: undefined;
    CreateAppointment: undefined;
    AppointmentDetail: { appointment: Appointment }
};
