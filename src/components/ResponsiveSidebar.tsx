import  { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ClockIcon, 
  CogIcon, 
  CreditCardIcon, 
  UsersIcon,
  MenuIcon,
  XIcon
} from 'lucide-react'
import { Link } from 'react-router-dom'

const menuItems = [
  { icon: ClockIcon, text: "Dashboard" },
  { icon: CreditCardIcon, text: "Transactions" },
  { icon: ClockIcon, text: "Schedules" },
  { icon: UsersIcon, text: "Users" },
  { icon: CogIcon, text: "Settings" },
]

export default function ResponsiveSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  const SidebarContent = () => (
    <>
      <h1 className="text-3xl font-bold mb-10">WaveTech</h1>
      <nav className="w-full flex flex-col items-center">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-4 text-gray-300 hover:text-white">
              <item.icon size={20} />
              <span className="font-medium hover:font-bold hover:duration-150 hover:ease-in-out transition-all hover:cursor-pointer">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <p className="text-gray-300 hover:text-white cursor-pointer pb-3">Help</p>
        <Link to={"/"} className="text-gray-300 hover:text-white cursor-pointer">Login</Link>
      </div>
    </>
  )

  return (
    <>

      <button
        className="fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-md lg:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>


      <div className="hidden lg:flex w-64 bg-black ml-5 mt-5 mb-5 flex-col items-center rounded-3xl text-white p-6">
        <SidebarContent />
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleSidebar} />
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-64 bg-black flex flex-col items-center text-white p-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <SidebarContent />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}