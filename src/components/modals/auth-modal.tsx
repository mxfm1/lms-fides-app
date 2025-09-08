'use client'

import { DialogContent, DialogOverlay, DialogTitle } from "@radix-ui/react-dialog";
import { Dialog } from "../ui/dialog";
import { LoginForm } from "@/app/(auth)/_components/forms/login-for";
import { UseAuthModal } from "@/context/modal-auth";
import { AnimatePresence, motion } from 'framer-motion'
import { RegisterForm } from "@/app/(auth)/_components/forms/register-form";

export default function LoginModal(){
    
    const { showModal, closeModal,modalType} = UseAuthModal()

    return (
        <AnimatePresence>
      {showModal && (
        <Dialog open={showModal} onOpenChange={closeModal}>
          {/* Fondo oscuro animado */}
          <DialogOverlay asChild>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </DialogOverlay>

          {/* Caja centrada con scroll si es necesario */}
          <DialogContent asChild className="overflow-x-hidden">
            <motion.div
              className="
                fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                w-full max-w-md max-h-[90vh] overflow-y-auto
                rounded-2xl bg-white dark:bg-neutral-900 shadow-xl focus:outline-nonex|
              "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <DialogTitle hidden />
              <AnimatePresence mode="wait">
                <motion.div
                    key={modalType}
                    initial={{ x: modalType == "login" ? 0 : -50 , opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: modalType == "login" ? 50 : 0 , opacity: 0}}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {modalType === "login" && <LoginForm />}
                  {modalType === "register" && <RegisterForm />}
                  {modalType === "pwrecovery" && <div>Formulario de recuperación</div>}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
    )
}
