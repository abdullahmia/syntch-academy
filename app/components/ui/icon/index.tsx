export interface IconProps {
  size?: number;
  className?: string;
  icon: any;
}

export const Icon = (props: IconProps) => {
  const { size = 18, className = "", icon: Icon } = props;
  return <Icon size={size} className={className} />;
};
