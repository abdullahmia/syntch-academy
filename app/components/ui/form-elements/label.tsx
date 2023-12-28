export interface LabelProps {
  children: React.ReactNode;
  withAsterisk?: boolean;
}

export const Label = (props: LabelProps) => {
  return (
    <label className={`block mb-1 text-[14px] text-primary font-light`}>
      {props.children}
      {props.withAsterisk && (
        <span className="text-dangerColor" title="Required">
          {" "}
          *
        </span>
      )}
    </label>
  );
};
