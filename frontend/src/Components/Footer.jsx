

const Footer = () => {
  return (
      <div className='bg-[#323232] px-5 lg:px-24 rounded-t-xl'>
          <div className='text-white py-16 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0'>
              <div className='col-span-2 lg:col-span-1 mb-10'>
                  <h2 className='text-2xl mb-2'>Bookly</h2>
                  <p className='text-lg font-light'>Una librería exclusivamente digital</p>
              </div>
              <div>
                  <h4 className='text-[#a09f9f] text-lg mb-2'>Descubrir</h4>
                  <div className='flex flex-col gap-2'>
                      <p className='font-light'>Biblioteca</p>
                      <p className='font-light'>Más Buscados</p>
                      <p className='font-light'>Más vendidos</p>
                  </div>
              </div>
              <div>
                  <h4 className='text-[#a09f9f] text-lg mb-2'>Sobre Nosotros</h4>
                  <div className='flex flex-col gap-2'>
                      <p className='font-light'>Contacto</p>
                      <p className='font-light'>Ayuda</p>
                  </div>
              </div>
          </div>
          <div className='text-white font-light text-sm pb-5 flex justify-center'>
              <p>2023 © No Country G9</p>
          </div>
      </div>
  )
}

export default Footer;