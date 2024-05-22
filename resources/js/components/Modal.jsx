// src/components/Modal.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, title, redirectPath }) => {
    const navigate = useNavigate();

    const handleOkClick = () => {
        if (redirectPath) {
            navigate(redirectPath);
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-[#1B1D1F] rounded-lg p-6 shadow-lg max-w-sm w-full">
                <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
                <div className="mb-4">
                    {/* Aquí puedes agregar contenido adicional si es necesario */}
                </div>
                <button
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={handleOkClick}
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default Modal;
