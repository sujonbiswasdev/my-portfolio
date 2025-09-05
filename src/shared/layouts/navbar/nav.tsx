'use client'
import Container from "@/shared/components/container";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Signup from "@/app/account/signup";
import Mymodal from "@/app/account/mymodal";
import Responsive from "./responsive";
type NavItem={
  item:any;
  hred:string
}
const Navbar = () => {
const [NavItems, setNavitems] = useState<NavItem[]>([]);
const [isOpen, setisOpen] = useState(false);
useEffect(()=>{
  axios.get("/data/navItem.json").then((response) => {
    setNavitems(response.data);
  });
},[])
  console.log(NavItems)
  let value=true
  return (
    <div className="w-full  top-0 sticky z-50 border-b-1 backdrop-blur-xl bg-transparent border-gray-600">
      <Container className="px-[50px]  md:px-[15px] lg:px-[90px] py-3">
         <nav className="flex justify-between items-center">
        {/* logo */}
        <div>
          <Link href="/"><h1 className="bg-linear-to-r from-primary to-red-700  text-transparent bg-clip-text inline-block text-3xl font-bold cursor-pointer transition-all duration-150  hover:scale-120 ">
            su<span className="">jon</span>
          </h1></Link>
        </div>

        {/* menu */}
        <div className="hidden md:flex md:gap-[20px] lg:gap-[40px]">
          {NavItems.map((items,index) => (
            <ul key={index}>
              <Link className="navitem" href={items.item==='Home'?"/":`/${items.item.toLowerCase()}`} >
                {items.item}
              </Link>
            </ul>
          ))}
        </div>

         <div className="flex gap-1 md:gap-5 lg:gap-10 items-center">
          {/* account */}
          <div className="hidden md:flex gap-1 md:gap-2 lg:gap-3">
         <Link href="/contact">   <button
              className="text-white px-4 py-2 rounded-xl border-1 border-primary cursor-pointer"
            >
              Contact Me
            </button> </Link>
            <button  className="text-white px-6 py-2 border-1 border-white rounded-xl">
              {value===true?<Signup/>:<Mymodal/>}
            </button>
            <button className="px-6 py-2 border-1 border-amber-400 cursor-pointer
             rounded-xl">
              meet
            </button>
          </div>
          <div className="flex gap-10 items-center">
             {/* dark and light mode */}
           {/* <DorkmodeToggler/> */}
          {/* menu items */}
          {/* <button
            className="text-[20px] md:hidden flex cursor-pointer"
            onClick={() => setisOpen(!isOpen)}
          > */}
            {/* {isOpen ? <IoIosCloseCircle /> : <AiOutlineBars />} */}
          {/* </button> */}

           {/* menu items */}
          <button
            className="text-[20px] md:hidden flex cursor-pointer"
            onClick={() => setisOpen(!isOpen)}
          >
            {isOpen ? "o" : "x"}
          </button>
          </div>
         
        </div>
      </nav>
      <div className="md:hidden block">
        <Responsive isOpen={isOpen} setisOpen={setisOpen} NavItems={NavItems}/>
      </div>
      
      </Container>
    </div>
  );
};

export default Navbar;
