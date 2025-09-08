'use client'

import { useContext, createContext, ReactNode, useState} from "react";

type ModalType = "login" | "register" | "pwrecovery"

interface ModalContextProps {
    openModal: (type?:ModalType) => void
    closeModal: (state:boolean) => void
    showModal: boolean,
    modalType:ModalType
    switchModalType: (type:ModalType) => void
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export function ModalProvider({children}:{children:ReactNode}){

    const [showModal,setShowModal] = useState(false)
    const [modalType,setModalType] = useState<ModalType>("login")

    const openModal = (type:ModalType="login") => {
        setShowModal(true)
        setModalType(type)
    }

    const closeModal = () => setShowModal(false)
    const switchModalType = (type:ModalType) => {
        setModalType(type)
    } 
    return (
        <ModalContext.Provider value={{showModal, modalType ,openModal,closeModal,switchModalType}}>
            {children}
        </ModalContext.Provider>
    )
}

export const UseAuthModal = () => {
    const ctx = useContext(ModalContext)
    if(!ctx) throw new Error("UseAuthModal debe ser utilziado dentro de un proveedor..")
    return ctx
}
