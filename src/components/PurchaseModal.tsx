interface PurchaseModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ open, onClose, title, message }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 grid place-items-center bg-black/70 px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#1a1234] p-6 text-center text-white shadow-2xl">
        <h3 className="font-hand text-4xl">{title}</h3>
        <p className="mt-3 text-slate-200">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-5 rounded-full bg-violet-500 px-6 py-2 font-semibold text-white"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default PurchaseModal;
