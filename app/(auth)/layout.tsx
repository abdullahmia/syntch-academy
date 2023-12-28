export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <main className="h-full flex justify-center items-center bg-fill-secondary">
      <div className="w-[500px] shadow rounded p-10 space-y-7 bg-white">
        {props.children}
      </div>
    </main>
  );
}
