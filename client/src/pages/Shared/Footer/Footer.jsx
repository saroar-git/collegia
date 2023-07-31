import logo from '/collegia.jpg'
import { BiLogoFacebookCircle, BiLogoLinkedin } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen, IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src={logo} alt="" width={50} />
          <p className='font-bold text-lg -mb-2'>Collegia Education</p>
          <span>Since 2019.</span>
        </div>

        <div>
          <h2 className="footer-title">Contact</h2>

          <div className='flex items-start gap-2'>
            <FaLocationDot className='text-lg text-[#FF182C]' />
            <p className='hover:link hover:text-purple-600'>
              Room No - 205, 2nd Floor, RUCSU building, <br /> University of Rajshahi.
            </p>
          </div>

          <div className='flex items-center  gap-2'>
            <IoIosMailOpen className='text-lg text-purple-600' />
            <p className='hover:link hover:text-purple-600'>
              collegia@ru.edu.bd
            </p>
          </div>
        </div>

        <div>
          <h2 className="footer-title">Social Links</h2>

          <div className='flex items-start  gap-2'>
            <BiLogoFacebookCircle className='text-xl text-[#1877F2]' />
            <p className='hover:link hover:text-purple-600'>
              Facebook Page
            </p>
          </div>

          <div className='flex items-start  gap-2'>
            <BiLogoLinkedin className='text-xl text-[#0A66C2]' />
            <p className='hover:link hover:text-purple-600'>
              LinkedIn Page
            </p>
          </div>

          <div className='flex items-start  gap-2'>
            <IoLogoWhatsapp className='text-lg text-[#25D366]' />
            <p  className='hover:link hover:text-purple-600'>
              WhatsApp Now
            </p>
          </div>
        </div>

        <div>
          <div className="footer-title">Community</div>
          <p  className='text-purple-600'>
            ●  <span className='text-black hover:link hover:text-purple-600'>Colleges</span>
          </p>
          <p  className='text-purple-600'>
            ●  <span className='text-black hover:link hover:text-purple-600'>Executive Committee</span>
          </p>
          <p  className='text-purple-600'>
            ●  <span className='text-black hover:link hover:text-purple-600'>Board Members</span>
          </p>
        </div>
      </footer>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">

        <div>
          <p>© 2023 - Collegia |  All right reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;