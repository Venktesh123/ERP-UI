# Incurv ERP — Enterprise Central (Frontend)

A pixel-oriented React recreation of two Incurv ERP screens:

1. **New Purchase Order** (`/purchase-orders/new`) — header info, vendor
   details, order line items with tax calculations, internal remarks, and
   attachments.
2. **Bulk Entry: Purchase Requisition** (`/requisitions/bulk-entry`) — an
   editable-looking bulk line-item table with a sticky totals footer.

A small pill switcher fixed at the bottom of the screen lets you jump
between the two pages in dev/preview.

## Stack

- React 18 + Vite
- React Router v6
- Tailwind CSS (design tokens in `tailwind.config.js`)
- lucide-react for icons

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Directory structure

```
src/
  components/
    layout/
      Sidebar.jsx       # left navigation rail
      TopBar.jsx         # top bar: search/breadcrumb slot + bell/help/settings + avatar
      PageLayout.jsx      # sidebar + scrollable content shell
    ui/
      Button.jsx          # primary/secondary/ghost/dark button variants
      Card.jsx             # bordered white panel with optional icon heading
      Field.jsx            # label wrapper + Input/Select/Textarea primitives
      Badge.jsx             # status pill (e.g. DRAFT)
  pages/
    NewPurchaseOrder/
      NewPurchaseOrder.jsx  # page composition
      HeaderInformation.jsx
      VendorDetails.jsx
      OrderLineItems.jsx
      NotesAndAttachments.jsx
    BulkEntryRequisition/
      BulkEntryRequisition.jsx
      LineItemsTable.jsx
      TotalsBar.jsx
  data/
    mockData.js            # nav items, user, seeded line items, currency helper
  App.jsx
  main.jsx
  index.css
```

## Notes

- All colors, spacing, and type sizes are pulled into Tailwind tokens
  (`tailwind.config.js`) rather than hard-coded, so re-theming only touches
  one file.
- Tables, totals, and the attachment list are driven by mock data in
  `src/data/mockData.js` — swap in real API calls where those imports are
  used.
