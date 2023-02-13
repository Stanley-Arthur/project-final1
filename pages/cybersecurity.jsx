import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Carousel from '@/components/carousel'
import CyberCard from '@/components/CyberCard'

const cybersecurity = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className="flex flex-col  pt-20 h-full w-full relative">
        <Image src="/img/adi.jpg " className=' object-cover  w-full h-screen  'width={1000} height={1000}  />
        <span className=' bg-gradient-to-r from-purple-500/50 to-pink-500/50 h-screen  w-full absolute'/>
       
        <div className='absolute space-y-8 top-[40%] left-[25%] '>
          <div className='flex flex-col space-y-2 justify-center items-center'>
            <h2 className='text-white text-5xl font-bold  font-sans '>Cybersecurity Protection For Business</h2>
            <p className='text-white text-xl font-semibold '>The threats are real. Make cybersecurity for your organization a priority. </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link href="/contact" legacyBehavior >
              <a href="/contact" target="_blank" rel="noopener noreferrer">
              <button className=' text-md  bg-red-500 shadow-md w-[200px] text-white py-5 rounded font-semibold'>Emergency Cyber Help</button>
              </a>
            </Link>
          </div>
        </div>
      
      </div>

      <div className='w-full flex items-center justify-center '>
        <div className='flex items-center w-[90%] justify-center  flex-col md:flex-row  min-h-screen mt-5'>
          <div className='md:w-[50%]  w-full flex justify-center  items-center flex-col'>
            <div>
              <h1 className='text-3xl font-bold '>Security Is More Important than Ever</h1>
              <p className='font-semibold mt-5 mb-5'>The quantity and complexity of cyber threats increases every year. Is your business prepared?</p>
              <p className='text-gray-500'>Every organization needs to establish the basic layers of cyber protection. Executech provides robust products and services for your cyber defense. Our cyber products include:</p>
              <div className='font-bold space-y-3 text-xl'>
                <p className='flex flex-row space-x-2 '>
                  <Image src="/img/icons8-checkmark-24.png" className='mr-4' width={30} height={20}/>
                  Firewalls
                </p>
                <p className='flex flex-row space-x-2 '>
                  <Image src="/img/icons8-checkmark-24.png" className='mr-4' width={30} height={20}/>
                  Anti-Ransomware Software
                </p>
                <p className='flex flex-row space-x-2  '>
                <Image src="/img/icons8-checkmark-24.png" className='mr-4' width={30} height={20}/>
                  Network Monitoring
                </p>
                <p className='flex flex-row space-x-2  '>
                <Image src="/img/icons8-checkmark-24.png" className='mr-4' width={30} height={20}/>
                  Employee Training
                </p>
                <p className='flex flex-row space-x-2 '>
                <Image src="/img/icons8-checkmark-24.png" className='mr-4' width={30} height={20}/>
                  Email Security and spam Filter
                </p>
              </div>
            </div>
          
            <p className='text-gray-400'>
            Don’t wait until it’s too late to implement critical layers of cyber protection. Contact us today for a complimentary network security scan. 
            </p>
          </div>
          <div className='md:w-[50%] w-full'>
            <Image className='w-[500px] h-96 object-cover' src="/img/is.jpg" width={500} height={500}  />
          </div>
        </div>

      </div>


      <div>
      <Carousel/>

      </div>

      <div className='flex  bg-gray-100 pt-10 pb-24 flex-col w-full '>
        <div className='w-full flex justify-center items-center mb-10'><h1 className='text-2xl font-bold '>Our Security Services</h1></div>

        <div className='flex justify-center mt-10 items-center'>

          <div className='max-w-7xl  grid xl:grid-cols-3 gap-x-10  gap-y-10  md:grid-cols-2 grid-cols-1'>
            <div className='flex  flex-row shadow-lg  justify-center cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg min-h-[200px] pb-2 w-[350px]  '>
              <div className='flex flex-col my-5'>
                <div className='  text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                  <Image  width={50} height={50} alt="" src="/img/icons08.png"/>
                </div>
              </div>
              <div className='flex flex-col gap-y-10 justify-center items-center w-58'>
                <div className=''>
                  <h1 className='text-xl font-bold'>
                    Managed Security Services
                  </h1> 
                </div>
                <p >
                Threat Detection and Prevention (TDP) is our comprehensive package of security products and services that includes the basics every organization needs.
                </p>
              </div>
            </div>

            <div className='flex  flex-row shadow-lg justify-center cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg min-h-[200px] pb-2 w-[350px]  '>
              <div className='flex flex-col my-5'>
                <div className='  text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                  <Image  width={50} height={50} alt="" src="/img/icons08.png"/>
                </div>
              </div>
              <div className='flex flex-col gap-y-10 justify-center items-center w-58'>
                <div className=''>
                  <h1 className='text-xl font-bold'>
                    Firewalls
                  </h1> 
                </div>
                <p >
                Firewalls are a must-have piece of any network. Our cyber consultants help with the purchasing, installation, and ongoing maintenance of your firewalls
                </p>
              </div>
            </div>

            <div className='flex  flex-row shadow-lg justify-center cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg min-h-[200px] pb-2 w-[350px]  '>
              <div className='flex flex-col my-5'>
                <div className='  text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                  <Image  width={50} height={50} alt="" src="/img/icons08.png"/>
                </div>
              </div>
              <div className='flex flex-col gap-y-10 justify-center items-center w-58'>
                <div className=''>
                  <h1 className='text-xl font-bold'>
                    Anti-Virus
                  </h1> 
                </div>
                <p >
                Always on, always up-to-date, anti-virus software from world-class vendors, serviced by Executech’s friendly team of cyber experts.
                </p>
              </div>
            </div>

            <div className='flex  flex-row shadow-lg justify-center cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg min-h-[200px] pb-2 w-[350px]  '>
              <div className='flex flex-col my-5'>
                <div className='  text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                  <Image  width={50} height={50} alt="" src="/img/icons08.png"/>
                </div>
              </div>
              <div className='flex flex-col gap-y-10 justify-center items-center w-58'>
                <div className=''>
                  <h1 className='text-xl font-bold'>
                    Employee Training
                  </h1> 
                </div>
                <p >
                Help reduce the risk of exposure from vulnerable employees. Our team of cyber experts train on a variety of best cyber practices and techniques.
                </p>
              </div>
            </div>

            <div className='flex  flex-row shadow-lg justify-center cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg min-h-[200px] pb-2 w-[350px]  '>
              <div className='flex flex-col my-5'>
                <div className='  text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                  <Image  width={50} height={50} alt="" src="/img/icons08.png"/>
                </div>
              </div>
              <div className='flex flex-col gap-y-10 justify-center items-center w-58'>
                <div className=''>
                  <h1 className='text-xl font-bold'>
                    Security Operations
                  </h1> 
                </div>
                <p >
                Together with Arctic Wolf, we bring you security operations monitoring and threat detection and response from a highly-trained Concierge Security Team.
                </p>
              </div>
            </div>
            <div className='flex  flex-row shadow-lg justify-center cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg min-h-[200px] pb-2 w-[350px]  '>
              <div className='flex flex-col my-5'>
                <div className='  text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                  <Image  width={50} height={50} alt="" src="/img/icons08.png"/>
                </div>
              </div>
              <div className='flex flex-col gap-y-10 justify-center items-center w-58'>
                <div className=''>
                  <h1 className='text-xl font-bold'>
                  Network Scans & Tests
                  </h1> 
                </div>
                <p >
                  Discover the weaknesses in your network, the vulnerabilities in your systems, and any exposed company credentials for sale on the dark web.
                </p>
              </div>
            </div>
          </div>

        </div>
         
  
      </div>
        
      <CyberCard/>
     
      

      
    </div>
  )
}

export default cybersecurity