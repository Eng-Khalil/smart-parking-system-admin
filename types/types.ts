export type CategoryProps = {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
};
export type SavingProps = {
  amount: number;
  month: string;
  name: string;
  userId: string;
  paymentDate: any;
};
export type UserProps = {
  name: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profileImage: string;
  email: string;
  password: string;
};
export type InvitedUserProps = {
  name: string;
  roleId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profileImage: string;
  email: string;
  hashedPassword: string;
};
export type LoginProps = {
  email: string;
  password: string;
};
export type ForgotPasswordProps = {
  email: string;
};

// types/types.ts

export interface RoleFormData {
  displayName: string;
  description?: string;
  permissions: string[];
  userId: string;
}

export interface RoleOption {
  label: string;
  value: string;
}

export interface RoleResponse {
  id: string;
  displayName: string;
  description?: string;
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}
export interface UnitDTO {
  id: string;
  name: string;
  symbol: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface TaxDTO {
  id: string;
  name: string;
  rate: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface BriefItemDTO {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  thumbnail: string | null;
}
export interface BrandDTO {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CategoryDTO {
  id: string;
  title: string;
  slug: string;
  imageUrl: string | null;
  description: string | null;
  parentId: string | null;
  orgId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateLoanDTO {
  id: string;
  loanNumber: string;
  borrowerId: string;
  amount?: number;
  interestRate?: number;
  loanType?: string;
  purpose?: string;
  duration?: string;
  collateral?: string;
  guarantorDetails?: {};
  approvalNotes?: string;
  approvedById?: string;
  totalRepayable?: string;
}

export interface CreateLoanRepaymentDTO {
  id: string;
  loanId: string;
  amount?: number;
  paymentDate: Date;

  tellerId?: string;
  remainingBalance: string;
  transactionId?: string;
}

export interface CreateBranchDTO {
  id: string;
  name: string;
  slug: string;
  location: string;
  phoneNumber: string;
  email?: string;
  managerId?: string;
}

export interface CreateSavingDTO {
  id: string;
  walletId: string;
  amount: Number;
}

export interface CreateDocumentDTO {
  id: string;
  userId: string;
  documentType: DocumentType;
  filePath: string;

  verificationSatus: boolean;
}

export interface CreateAuditLogDTO {
  id?: string;
  userId: string;
  action: string;
  entityAffected: string;
  oldValue?: string;
  newValue?: string;
  ipAddress?: string;
  systemNotes?: string;
}

export interface CreateMobileMoneyTransactionDTO {
  id: string;
  userId: string;
  mobileNumber: string;
  provider: string;
  amount: number;
  transactionRef: string;

  accountAffected: string;
}
