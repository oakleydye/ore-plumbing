export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  urgency: 'emergency' | 'urgent' | 'normal' | 'quote';
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  id?: string;
  error?: string;
}
