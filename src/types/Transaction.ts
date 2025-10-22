export interface Transaction {
  id: string;
  type: 'Payment' | 'Credit';
  amount: number;
  name: string;
  description: string;
  date: string;
  isPending: boolean;
  authorizedUser: string | null;
  icon: string;
  iconBg: string;
  percentage: number | null;
  status: string;
  cardUsed: string;
}

