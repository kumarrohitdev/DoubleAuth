import { IoCloseSharp } from "react-icons/io5";
import { ScanQrMethod } from "./ScanQrMethod";

interface AddDataPopupProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export const AddDataPopup = ({ isOpen, setIsOpen }: AddDataPopupProps) => {
    if (!isOpen) return null;

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div className="fixed bg-white inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg absolute px-2  p-2 top-0 w-full">
                <button onClick={handleClose}><IoCloseSharp className="cursor-pointer text-right " size={23} color="white" /></button>
            </div>
            <ScanQrMethod />
        </div>
    );
}