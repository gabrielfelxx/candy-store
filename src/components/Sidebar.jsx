import { HiOutlineMenu, HiHome } from 'react-icons/hi';
import { CiShoppingBasket, CiDeliveryTruck } from 'react-icons/ci';
import { IoIosHeart } from 'react-icons/io';

const Sidebar = () => {
  return (
    <div className="sticky z-10 fixed top-0 left-0 w-full h-12 bg-gray-100 flex justify-center items-center">
      {/* <button className="p-2">
        <HiOutlineMenu size={'2rem'} />
      </button> */}
      
      <ul className="flex space-x-8">
        <li>
          <button>
            <HiHome size={'1.6rem'} />
          </button>
        </li>
        
        <li>
          <button>
            <CiShoppingBasket size={'1.6rem'} />
          </button>
        </li>
        
        <li>
          <button>
            <IoIosHeart size={'1.6rem'} />
          </button>
        </li>
        
        <li>
          <button>
            <CiDeliveryTruck size={'1.6rem'} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
