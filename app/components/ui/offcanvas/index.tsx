import { useEffect, useState } from "react";

interface OffcanvasProps {
  children: React.ReactNode;
  onClick: () => void;
  isOpen: boolean;
  position?: "left" | "right";
  width?: string;
}

const Offcanvas = (props: OffcanvasProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen);
  const [animate, setAnimate] = useState<boolean>(false);
  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setAnimate(true);
      }, 50);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  return (
    <div
      onClick={props.onClick}
      className={`fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[100] flex items-center ${
        props.position === "left"
          ? "justify-start"
          : props.position === "right"
          ? "justify-end"
          : "justify-end"
      } ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div
        style={{
          width: props.width ? props.width : "400px",
        }}
        className={`lg:my-0 my-48 top-0 h-full bg-white transform transition-transform duration-100 overflow-y-scroll no-scrollbar ${
          animate
            ? props.position === "left"
              ? "-translate-x-0"
              : props.position === "right"
              ? "translate-x-0"
              : "translate-x-0"
            : props.position === "left"
            ? "-translate-x-full"
            : props.position === "right"
            ? "translate-x-full"
            : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">{props.children}</div>
      </div>
    </div>
  );
};

export default Offcanvas;
