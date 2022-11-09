import Image from 'next/image'
import Link from 'next/link'
import ContactUs from '../components/ContactUs'
import Menu from '../components/Menu'

export default function Home() {
  return (

    <div className='bg-neutral-200'>
      <Menu />
      <div className='relative h-128' >
        <Image
          alt='Cover Photo'
          src="/cover_photo_2.png"
          fill
          quality={100}  
          className='relative'        
        />

        <div className='absolute bottom-[-20px] inset-x-0'>
        <Image
          alt='Cover Photo'
          src="/group.png"
          width={800}
          height={800}
          quality={100}
          className='relative mx-auto'          
        />
        </div>
      
       
      </div>    

      <div className='container md:mx-auto my-4'>
        <div className='border-b-green-600 border-b-2 my-2 text-2xl'>Latest Episode</div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className='text-black py-4 flex flex-col m-auto'>
            <p className='my-3 text-5xl uppercase'>Week 9 NFL Preview</p>
            <p className='my-3 text-xl'>We preview all of the action of Week 9 and talk through major fantasy implications!</p>
          </div>
          <div className='bg-black text-white py-4'>
            <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.youtube.com/embed/4QE479Dthh0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>

  )
}
