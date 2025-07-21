export type AppointmentStatus = 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';

export interface Appointment {
  id: string;
  date: string;
  doctor: string;
  notes?: string;
  status: AppointmentStatus;
}