import { CiCirclePlus } from "react-icons/ci";
import { useRecoilState } from "recoil";
import { authState } from "../stores/atoms/auth";
import { AddDataPopupState } from "../stores/atoms/addPopup";


export const Navbar = () => {
    // @ts-ignore
    const [auth, setAuth] = useRecoilState(authState)
    // @ts-ignore
    const [isOpen, setIsOpen] = useRecoilState(AddDataPopupState)

    const handleState = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-3">
                    <h1 className="text-white font-semibold text-lg tracking-wide cursor-pointer">Double Auth</h1>
                </div>

                <div className="flex items-center space-x-4">

                    {auth ? <button onClick={handleState}> <CiCirclePlus className="cursor-pointer" size={23} color="white" /> </button> :
                        <button className="px-2 py-[2px] cursor-pointer text-sm bg-white text-blue-600 hover:bg-blue-50 rounded-sm transition-colors duration-200 font-small">
                            Login
                        </button>
                    }
                </div>
            </div>
        </nav>
    );
}