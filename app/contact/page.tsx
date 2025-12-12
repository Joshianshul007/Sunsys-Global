import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <>
      <main className="bg-[#0B0E11] text-white pt-40 pb-28 px-8 min-h-screen">

        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold">Contact Us</h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
            Have questions? Need a service? Want to collaborate?  
            We're here to help — send us a message and our team will respond shortly.
          </p>
        </div>

        <ContactUs />
        
      </main>
      <Footer/>
    </>
  )
}
export default page;

