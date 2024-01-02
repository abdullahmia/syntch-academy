import { AccessLayer } from "./components/AccessLayer";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return <AccessLayer>{props.children}</AccessLayer>;
}
