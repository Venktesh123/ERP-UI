export const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: 'LayoutGrid' },
  { key: 'customers', label: 'Customers', icon: 'Users' },
  { key: 'vendors', label: 'Vendors', icon: 'Landmark' },
  { key: 'finance', label: 'Finance', icon: 'Wallet' },
  { key: 'reports', label: 'Reports', icon: 'BarChart3' },
];

export const footerNavItems = [
  { key: 'support', label: 'Support', icon: 'LifeBuoy' },
  { key: 'signout', label: 'Sign Out', icon: 'LogOut' },
];

export const currentUser = {
  name: 'Alex Rivera',
  avatar:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=128&h=128&fit=crop&crop=faces',
};

export const purchaseOrderLineItems = [
  {
    id: 1,
    itemCode: 'SKU-88291-B',
    description: 'High-Performance Widget Assembly',
    qty: 5,
    unit: 'Each',
    unitPrice: 1250.0,
    tax: 15,
  },
  {
    id: 2,
    itemCode: 'SKU-10292-W',
    description: 'Replacement Filter Cartridge',
    qty: 12,
    unit: 'Box',
    unitPrice: 85.45,
    tax: 8,
  },
];

export const requisitionLineItems = [
  {
    id: 101,
    itemCode: 'IT-SRV-992',
    description: 'Dell Latitude 5420 Workstation',
    qty: 12,
    unit: 'Each',
    unitPrice: 1200.0,
  },
  {
    id: 102,
    itemCode: 'OFF-SUP-012',
    description: 'Ergonomic Office Chair - Mesh',
    qty: 25,
    unit: 'Each',
    unitPrice: 350.0,
  },
  {
    id: 103,
    itemCode: '',
    description: '',
    qty: null,
    unit: '-',
    unitPrice: 0,
    isEmpty: true,
  },
  {
    id: 104,
    itemCode: '',
    description: '',
    qty: null,
    unit: '-',
    unitPrice: 0,
    isEmpty: true,
  },
];

export const currency = (value) =>
  value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
