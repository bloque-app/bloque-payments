export type Currency = 'COP' | 'USD';

export interface Metadata {
  [key: string]: string | number | boolean;
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postal_code?: string;
  country: string;
}
