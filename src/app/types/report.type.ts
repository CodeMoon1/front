export interface Report {
  id: string;
  generatedAt: Date;
  reportUrl: string;
  status: 'completed' | 'processing' | 'error'; // Adicionado para melhor UX
}
