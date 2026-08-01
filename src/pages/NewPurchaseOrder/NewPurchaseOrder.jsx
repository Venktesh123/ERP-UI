import { Printer } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';
import TopBar, { SearchField, Breadcrumb } from '../../components/layout/TopBar';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import HeaderInformation from './HeaderInformation';
import VendorDetails from './VendorDetails';
import OrderLineItems from './OrderLineItems';
import { InternalRemarks, Attachments } from './NotesAndAttachments';

export default function NewPurchaseOrder() {
  return (
    <PageLayout activeKey="customers">
      <TopBar
        left={<Breadcrumb items={['Procurement', 'Purchase Orders', 'New PO']} />}
        right={<SearchField placeholder="Search POs..." />}
      />

      <main className="flex-1 overflow-y-auto thin-scroll px-8 py-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-ink-900">
                New Purchase Order
              </h1>
              <Badge>Draft</Badge>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="secondary" icon={Printer}>
                Print/Export
              </Button>
              <Button variant="secondary">Save as Draft</Button>
              <Button variant="primary">Send for Approval</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <HeaderInformation />
            <VendorDetails />
            <OrderLineItems />
            <InternalRemarks />
            <Attachments />
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
