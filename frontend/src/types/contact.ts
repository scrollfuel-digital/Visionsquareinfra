export type ContactFormData = {
  fullName: string;
  phoneNum: string;
  emailAdd?: string;
  propReq?: string;
  budgetRange?: string;
  contactTime?: string;
  messageText?: string;
};

export type ContactApiResponse = {
  success: boolean;
  message: string;
  data?: ContactFormData;
  errors?: Record<string, string>;
};
