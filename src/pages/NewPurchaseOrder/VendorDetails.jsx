import { Landmark, Search } from 'lucide-react';
import Card from '../../components/ui/Card';
import { Field, Input, Textarea } from '../../components/ui/Field';

export default function VendorDetails() {
  return (
    <Card title="Vendor Details" icon={Landmark}>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-5">
          <Field label="Vendor Lookup">
            <div className="relative">
              <Input placeholder="Start typing vendor name..." className="pr-9" />
              <Search
                size={16}
                className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400"
              />
            </div>
          </Field>
          <Field label="Primary Contact">
            <Input placeholder="John Doe" />
          </Field>
          <Field label="Email Address">
            <Input type="email" placeholder="contact@vendor.com" />
          </Field>
        </div>

        <Field label="Shipping Address">
          <Textarea rows={7} placeholder="Enter full address..." />
        </Field>
      </div>
    </Card>
  );
}
