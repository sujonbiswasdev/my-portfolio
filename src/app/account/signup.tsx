import { Modal, ModalContent } from '@heroui/react'
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
const Signup = () => {
    const [isModal,setModal] = useState(false)
     const handleClose=()=>{
        setModal(!isModal)
    }
  return (
     <div>
        <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{duration:0.2}} className='cursor-pointer' onClick={()=>setModal(!isModal)}>Account</motion.button>
        <div>
             <Modal isOpen={isModal} onOpenChange={()=>setModal(!isModal)} onClose={handleClose} size='4xl' backdrop='blur' placement="top">
                        <ModalContent>
                           <div className='text-black flex'>
                            <div className='w-1/3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet, culpa tempore atque quisquam sint laboriosam! Fuga harum praesentium odit pariatur beatae deserunt reprehenderit, ratione nisi, doloremque deleniti, tenetur ab.

                            </div>
                            <div className='w-2/3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, assumenda distinctio. Magnam, eius voluptas? Dolorem ipsum, quidem, debitis nam sit cum quis veritatis fugiat iure ullam quaerat aliquid! Maxime, accusantium.
                            </div>
                           </div>
                        </ModalContent>
                    </Modal>
                </div>
        </div>
  )
}

export default Signup