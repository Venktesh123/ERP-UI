import { Info } from 'lucide-react';
import Card from '../../components/ui/Card';
import { Field, Input, Select } from '../../components/ui/Field';

export default function HeaderInformation() {
  return (
    <Card title="Header Information" icon={Info}>
      <div className="flex flex-col gap-5">
        <Field label="PO Number">
          <Input value="PO-2024-00142" readOnly className="bg-surface font-medium" />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Order Date">
            <Input type="date" defaultValue="2023-11-24" />
          </Field>
          <Field label="Exp. Delivery">
            <Input type="date" placeholder="mm/dd/yyyy" />
          </Field>
        </div>

        <Field label="Payment Terms">
          <Select defaultValue="Net 30">
            <option>Net 30</option>
            <option>Net 45</option>
            <option>Net 60</option>
            <option>Due on Receipt</option>
          </Select>
        </Field>

        <Field label="Warehouse / Location">
          <Select defaultValue="Central Warehouse - A1">
            <option>Central Warehouse - A1</option>
            <option>North Distribution - B2</option>
            <option>South Depot - C3</option>
          </Select>
        </Field>
      </div>
    </Card>
  );
}
