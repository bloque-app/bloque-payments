import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { BloqueCheckout } from '../src/bloque-checkout';

const meta = {
  title: 'Components/BloqueCheckout',
  component: BloqueCheckout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    amount: { control: 'number' },
    requireEmail: { control: 'boolean' },
    showMethodSelector: { control: 'boolean' },
    availableMethods: {
      control: 'check',
      options: ['card', 'pse', 'cash'],
    },
  },
  args: {
    onSubmit: fn(),
    onSuccess: fn(),
    onError: fn(),
  },
} satisfies Meta<typeof BloqueCheckout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    amount: 50000,
  },
};

export const WithAllMethods: Story = {
  args: {
    amount: 100000,
    availableMethods: ['card', 'pse', 'cash'],
    showMethodSelector: true,
  },
};

export const CardOnly: Story = {
  args: {
    amount: 25000,
    availableMethods: ['card'],
    showMethodSelector: false,
  },
};

export const PSEOnly: Story = {
  args: {
    amount: 75000,
    availableMethods: ['pse'],
    showMethodSelector: false,
  },
};

export const WithoutEmailRequired: Story = {
  args: {
    amount: 30000,
    requireEmail: false,
  },
};

export const CustomAppearance: Story = {
  args: {
    amount: 45000,
    appearance: {
      primaryColor: '#64d66aff',
      borderRadius: '18px',
      fontFamily: 'system-ui, sans-serif',
    },
  },
};
