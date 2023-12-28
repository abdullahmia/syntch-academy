export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <main className="h-full flex justify-center items-center bg-fill-secondary">
      {props.children}
    </main>
  );
}
