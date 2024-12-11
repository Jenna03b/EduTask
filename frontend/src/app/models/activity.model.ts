export interface Activity {
  id: number;
  type: string;
  subject: string;
  topic: string;
  notes?: string;
  progress: string;
  date: string;
  userId: number;
}
