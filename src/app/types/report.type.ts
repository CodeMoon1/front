export interface Report {
  id: string;
  userId: string;
  urlFile: string;
  status: 'COMPLETED' | 'PROCESSING' | 'ERROR';
  createAt: string;
}
