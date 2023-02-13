import React,{useState} from 'react'
import Link from 'next/link'
import {RiArrowDropDownFill} from 'react-icons/ri'



const NavItems = () => {

  const [submenuOpen,setsubmenuOpen]=useState(false)


  const menus=[
    {title:"Home ",path:"/"},
    {title:"TechSupport",path:"#techsupport"},
    {title:"Services",icon:<RiArrowDropDownFill size={25} />,submenu:true,subItems:[
      {title:"Managed Services",path:"/managedservices" },
      {title:"Cybersecurity",path:"/cybersecurity" },
      {title:"Cloud Services",path:"/cloudservices" },
      {title:"Our Approach",path:"/approach" },
    ]
  },
  
  {title:"Products",path:"/products"},
  {title:"Contact",path:"/contact"},
   
  ]
  return (
    <div className=' md:flex'>
      {
        menus.map((menu,index)=>(
          <div  key={menu.id || index} className='py-2 flex flex-col'>
            <ul className='inline-flex items-center'>
            <a 
              href={menu.path}
             >
                
                <li className=' ml-10 text-sm md:text-xl uppercase hover:border-b-4  hover:border-b-yellow-600   '>
                {menu.title}

                </li>     
            </a>
             <span className={` inline-flex text-mx   cursor-pointer ${submenuOpen && "rotate-180"}`}  onClick={()=>setsubmenuOpen(!submenuOpen)}>{menu.icon}</span> 
            </ul>
             {
              menu.submenu && submenuOpen && (
                <div className='text-sm mt-12 ml-2   lg:bg-black/50 min-w-52 px-10 h-44 pl-5 cursor-pointer lg:absolute top-6 z-20'>
                  {menu.subItems.map((subItem, index)=>(
                    <div  key={subItem.id || index} className='pt-3 '>
                      <Link  href={subItem.path} className='md:text-xl  py-3 px-4 rounded uppercase hover:border-l-4  hover:border-l-yellow-600' >{subItem.title}</Link>
                    </div>
                  ))}
                </div>

              )
            }
          </div>
        )
       )
       
      }
    </div>
  )
}

export default NavItems