
export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-[80vh] flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
          {children}
      </div>
    </main>
  );
}
