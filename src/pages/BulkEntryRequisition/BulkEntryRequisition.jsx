import { Plus, FileUp, CheckCircle2 } from "lucide-react";
import PageLayout from "../../components/layout/PageLayout";
import TopBar, {
  SearchField,
  Breadcrumb,
} from "../../components/layout/TopBar";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import LineItemsTable from "./LineItemsTable";
import TotalsBar from "./TotalsBar";

export default function BulkEntryRequisition() {
  const subtotal = 45200.0;
  const tax = 3616.0;
  const grandTotal = 48816.0;

  return (
    <PageLayout activeKey="customers">
      <TopBar
        left={<SearchField placeholder="Global Search..." />}
        showUserName
      />

      <main className="flex-1 overflow-y-auto thin-scroll px-8 py-6">
        <div className="mx-auto max-w-6xl">
          <Breadcrumb items={["Procurement", "Requisitions", "Bulk Entry"]} />

          <div className="mt-2 flex items-center gap-3">
            <h1 className="text-2xl font-bold text-ink-900">
              Bulk Entry: Purchase Requisition
            </h1>
            <Badge>Draft</Badge>
          </div>

          <div className="mb-6 mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="secondary" icon={Plus}>
                Add Row
              </Button>
              <Button variant="secondary" icon={FileUp}>
                Import CSV
              </Button>
              <div className="mx-1 h-6 w-px bg-border" />
              <Button variant="secondary" icon={CheckCircle2}>
                Validate All
              </Button>
            </div>

            <div className="flex items-center gap-5">
              <button
                type="button"
                className="text-sm font-semibold text-danger hover:opacity-75"
              >
                Discard Changes
              </button>
              <Button variant="primary">Save &amp; Post</Button>
            </div>
          </div>

          <LineItemsTable />
        </div>
      </main>

      <TotalsBar
        totalLines={12}
        subtotal={subtotal}
        tax={tax}
        grandTotal={grandTotal}
      />
    </PageLayout>
  );
}
