

const Navbar = () => {
  return (
   <header>
        <nav className="flex justify-between items-center font-sm gap-2">
            <div >
                <ul className=" flex justify-between items-centerbg-green-100 gap-6 text-[18px]">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="font-bold text-[50px]">Solus</div>
            <div>
                <ul className=" flex justify-between items-centerbg-green-100 gap-6 text-[18px]">
                    <li>Therapist</li>
                    <li>Resources</li>
                    <li>Contacts</li>
                </ul>
            </div>

        </nav>
   </header>
  )
}

export default Navbar
