import { VerifiedAuth } from "../../components/VerifiedAuth";
export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return <VerifiedAuth>{props.children}</VerifiedAuth>;
}
