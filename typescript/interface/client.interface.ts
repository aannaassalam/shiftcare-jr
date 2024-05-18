export interface IClient {
  id: number;
  salutation: string;
  firstName: string;
  middleName: string;
  lastName: string;
  displayName: string;
  gender: string;
  dateOfBirth: number;
  apartmentNumber: string;
  address: string;
  contactNumber: string;
  mobileNumber: string;
  email: string;
  religion: string;
  maritalStatus: string;
  nationality: string;
  language: string[];
  company: string;
  ndisNumber: string;
  agedCareRecipientID: string;
  customField: string;
  purchaseOrderNumber: string;
  clientType: string;
  priceBookId: number;
  priceBookName: string;
  teamIds: number[];
  teamName: string[];
  isShareProgressNotes: boolean;
  isSMSRemindersEnabled: boolean;
  isInvoiceTravel: boolean;
  prospect: boolean;
  deleted: boolean;
  photoDownloadURL: string | null;
}

export interface ClientBody {
  salutation: string;
  firstName: string;
  middleName: string;
  lastName: string;
  displayName?: string;
  gender: string;
  dateOfBirth: string;
  apartmentNumber: string;
  address: string;
  contactNumber: string;
  mobileNumber: string;
  email: string;
  religion: string;
  maritalStatus: string;
  nationality: string;
  language: string[];
  prospect: boolean;
}

export interface ClientSettings {
  ndisNumber: string;
  agedCareRecipientID: string;
  referenceNumber: boolean;
  customField: string;
  purchaseOrderNumber: string;
  clientType: string;
  priceBookId: number;
  priceBookName?: string;
  teamIds: number[];
  teams?: { teamName: string; id: number }[];
  isShareProgressNotes: boolean;
  isSMSRemindersEnabled?: boolean;
  isInvoiceTravel: boolean;
}
