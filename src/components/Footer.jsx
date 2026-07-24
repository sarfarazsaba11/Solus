

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-14 gap-4">
     <div className="bg-white rounded-3xl w-[620px] h-[460px] ">
        <h2 className="font-bold text-[40px]">Solus</h2>
        <div className = "grid grid-cols-3 ">
          <ul className="flex flex-col gap-3 text-[18px]">
            <li>About</li>
            <li>Services</li>
            <li>Therapist</li>
            <li>Resources</li>
            <li>Contacts</li>
          </ul>
          <ul className="flex flex-col gap-3 text-[18px]">
            <li>Instagram</li>
            <li>Youtube</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
          </ul>
          <ul className="flex flex-col gap-3 text-[18px]">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
          <p className="text-gray-100">© [2035] Solus. All rights reserved.</p>

        </div>

     </div>

     <div>
        <div className="relative w-[620px] h-[440px] bg-cover bg-center overflow-hidden "
          style={{ backgroundImage: 'url("/Rectangle30.png")' }}>
            {/* Decorative illustrations */}
        <div
          className="absolute top-4 right-0 w-[228px] h-[224px]"
          style={{ backgroundImage: 'url("/illustration7.png")' }}
        ></div>

          <div className = "relative z-10 flex flex-col   pl-[70px] pt-[30px] text-white">
            <h4 className="font-bold text-[44px] "> Find,</h4>
            <h4 className="font-bold text-[44px] ">Support,</h4>
            <h4 className="font-bold text-[44px] ">Guidance,</h4>
            <h4 className="font-bold text-[44px] ">and Balance</h4>
            <button className="bg-white rounded-full w-[480px] py-3 mt-8 text-black">Find Support Now</button>
            

          </div>


        </div>

     </div>
    </footer>
  )
}

export default Footer