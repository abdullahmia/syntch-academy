import { LayoutWrapper } from "../components/ui/layout/LayoutWrapper";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return <LayoutWrapper>{props.children}</LayoutWrapper>;
}
