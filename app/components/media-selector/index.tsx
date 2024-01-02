import Modal from "../ui/modal";

export interface MediaSelectorProps {
  isOpen: boolean;
  toggole: () => void;
}

export const MediaSelector = ({ isOpen, toggole }: MediaSelectorProps) => {
  return (
    <Modal isOpen={isOpen} toggoleModal={toggole}>
      This is the media selector
    </Modal>
  );
};
