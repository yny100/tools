export default function ToolPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-10 space-y-6 sm:px-20 lg:px-30 pb-10">
      {children}
    </div>
  );
}