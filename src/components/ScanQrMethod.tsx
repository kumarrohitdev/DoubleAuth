import { BsQrCode } from "react-icons/bs"
import { GoLink } from "react-icons/go"
import { MdEditNote } from "react-icons/md"
import { Manual } from "./ManualEntry"
import { useState } from "react"

export const ScanQrMethod = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Select Authentication Method</h2>
            <div className="space-y-3">
                <button onClick={() => setIsOpen(true)} className="w-full p-3 flex items-center space-x-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <MdEditNote size={20} />
                    <span className="text-gray-700">Enter Secret Key Manually</span>
                </button>

                <button className="w-full p-3 flex items-center space-x-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <BsQrCode size={20} />
                    <span className="text-gray-700">Scan QR Code</span>
                </button>

                <button className="w-full p-3 flex items-center space-x-3 border rounded-lg hover:bg-gray-50 transition-colors">

                    <GoLink size={20} />
                    <span className="text-gray-700">Import from URL</span>
                </button>
            </div>
            {isOpen &&
                <Manual isOpen={isOpen} setIsOpen={setIsOpen} />
            }
        </div>
    )
}