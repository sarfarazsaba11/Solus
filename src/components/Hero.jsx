

// const Hero = () => {
//   return (
//   <main>
//     <div  className="mt-6 mb-6 h-auto">

//         <div  style={{backgroundImage:'url("../../public/Rectangle8.png")'}} className="relative mt-6 mb-6 h-auto">
        
//         </div>    
//         <div style={{backgroundImage:'url("../../public/Illustration1.png")'}} className='absolute top-0 left 0'></div>
//         <div style={{backgroundImage:'url("../../public/Illustration2.png")'}}   className='absolute top-0 left 0'></div>
//         <h1 className='font-bold'>Support For Your Mental Well Being</h1>
//         <p>Connect with licensed therapists, counselors, and wellness coaches to support your journey.</p>
//         <button className='rounded-full'>Get Supported</button>
//     </div>

//   </main>
//   )
// }

// export default Hero

// const Hero = () => {
//   return (
//     <main>
//       <div
//         className="relative bg-cover bg-center my-6 h-167 w-full"
//         style={{ backgroundImage: 'url("/Rectangle8.png")' }}
//       >
//       {/* <div className="bg-[#F9E6D0] my-6 px-6 relative" > */}

      
//         <div
//           className="absolute bottom-0 right-0  w-40 h-full bg-contain bg-no-repeat"
//           style={{ backgroundImage: 'url("/Illustration1.png")' }}
//         ></div>

//         <div
//           className="absolute bottom-0 left-0 w-40 h-90 bg-contain bg-no-repeat"
//           style={{ backgroundImage: 'url("/Illustration2.png")' }}
//         ></div>

//         <h1 className="font-bold ">
//           Support For Your Mental Well Being
//         </h1>

//         <p className="font-semibold">
//           Connect with licensed therapists, counselors, and wellness coaches
//           to support your journey.
//         </p>

//         <button className="rounded-full">
//           Get Supported
//         </button>
//       </div>
//     </main>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <main>
      <div
        className="relative bg-cover bg-center my-6 w-[1240px] h-[668px] md:h-[600px] w-full rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center px-6 mb-6"
        style={{ backgroundImage: 'url("/Rectangle8.png")' }}
      >
        {/* Decorative illustrations */}
        <div
          className="absolute bottom-0 -right-4 w-[406.41px] h-full bg-contain bg-no-repeat bg-bottom pointer-events-none"
          style={{ backgroundImage: 'url("/Illustration1.png")' }}
        ></div>

        <div
          className="absolute bottom-0 -left-20 w-[380px] h-90 bg-contain bg-no-repeat bg-bottom pointer-events-none"
          style={{ backgroundImage: 'url("/Illustration2.png")' }}
        ></div>

        {/* Content sits above illustrations */}
        <div className="relative z-10 max-w-[640px]">
          <h1 className="font-bold text-4xl md:text-5xl text-[#0F3D3E] leading-tight mb-6">
            Support for Your Mental Well-being
          </h1>

          <p className="font-semibold text-[#0F3D3E]/80 text-lg mb-8">
            Connect with licensed therapists, counselors, and wellness coaches
            to support your journey.
          </p>

          <button className="rounded-full bg-[#0F3D3E] text-white font-semibold px-8 py-3 hover:bg-[#0a2c2d] transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;