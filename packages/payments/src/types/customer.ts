import type { Address, Metadata } from './common';

export interface Customer {
  id?: string;
  object?: 'customer';
  email: string;
  name: string;
  phone?: string;
  address?: Address;
  metadata?: Metadata;
  created_at?: string;
  updated_at?: string;
}
