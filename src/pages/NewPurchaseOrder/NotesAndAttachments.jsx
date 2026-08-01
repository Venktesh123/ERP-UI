import { Paperclip, UploadCloud, X, FileText } from 'lucide-react';
import Card from '../../components/ui/Card';
import { Textarea } from '../../components/ui/Field';

export function InternalRemarks() {
  return (
    <Card title="Internal Remarks / Notes">
      <Textarea
        rows={5}
        placeholder="Add any internal instructions for the warehouse or finance teams..."
      />
    </Card>
  );
}

export function Attachments() {
  return (
    <Card title="Attachments" icon={Paperclip}>
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border py-8 text-center">
        <UploadCloud size={28} className="text-ink-400" />
        <p className="text-sm text-ink-500">
          Drag &amp; drop files here or{' '}
          <span className="font-semibold text-brand-600">browse</span>
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-md border border-border px-3 py-2.5">
        <div className="flex items-center gap-2 text-sm text-ink-700">
          <FileText size={16} className="text-ink-400" />
          quote_v2.pdf
        </div>
        <button type="button" className="text-danger hover:opacity-70">
          <X size={16} />
        </button>
      </div>
    </Card>
  );
}
