import { MdClose } from "react-icons/md";

interface IManual {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export const Manual = ({ isOpen, setIsOpen }: IManual) => {
    if (!isOpen) return null;

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex w-full items-center justify-center">
            <div className="bg-white w-full h-full max-w-md">
                <div className="flex justify-between p-4 border-b bg-blue-500">
                    <h2 className="text-lg font-semibold text-white">Manual Entry</h2>
                    <button className="cursor-pointer" onClick={handleClose}>
                        <MdClose size={20} color="white" />
                    </button>
                </div>

                <div className="p-4 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Service Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g. Google, GitHub, etc."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Secret Key
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your secret key"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Enter the secret key provided by your service
                        </p>
                    </div>

                    <div className="flex space-x-3 pt-4">
                        <button
                            onClick={handleClose}
                            className="flex-1 px-4 cursor-pointer py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button className="flex-1 px-4 cursor-pointer py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Add Token
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
