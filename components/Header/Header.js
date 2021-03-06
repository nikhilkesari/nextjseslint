
const Header = () => {
  return (
    <div className="m-auto w-max">
      <div className="h-6 py-px my-px">
        <div className="float-right">
          <ul className="flex items-center h-6 text-xs text-gray-800">
            <li className="inline-block">
              <div className="flex items-center">
                <i className="w-4 h-4 mr-1 phoneIcon" />
                <span className="text-tiny">1860 123 1000</span>
              </div>
            </li>
            <li className="relative z-50 h-full px-3 mx-2">
              <a className="flex items-center h-full cursor-pointer">
                <i className="w-3 h-4 locationIcon" />
                <span className="mx-1 text-tiny hover:text-green">
                  Domlur, Bangalore
                </span>
                <i className="box-content w-2 h-1 p-px addressDropdownImg" />
              </a>
              <div className="absolute right-0 hidden top-full">
                <form className="px-5 py-3 text-sm bg-white">
                  <label>Select your city to start shopping</label>
                  <input
                    type="search"
                    className="box-content h-1 p-4 mb-4 border border-gray-500 cursor-pointer w-75 text-tiny"
                  />
                  <input
                    type="search"
                    className="box-content h-1 p-4 mb-3 border border-gray-500 cursor-pointer w-75 text-tiny"
                    placeholder="Enter your area / apartment / pincode"
                  />
                  <button className="block px-5 py-1 m-auto border border-green bg-green">
                    Continue
                  </button>
                </form>
              </div>
            </li>
            <li className="inline-block">
              <div className="flex items-center cursor-pointer text-tiny">
                <i className="box-content w-4 h-4 px-px mr-1 nonMemberIcon" />
                <span className="cursor-pointer hover:text-green">Login</span>
                <span className="mx-1">|</span>
                <span className="cursor-pointer hover:text-green">Sign up</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 mr-16 -mt-3">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div className="flex-auto ml-1 mr-4">
          <form className="flex w-full">
            <input
              placeholder="Search for Products.."
              className="box-content flex-auto h-5 px-3 py-1 text-sm placeholder-gray-700 border border-gray-700 focus:border-green"
            />
            <button className="box-content w-8 h-5 px-px py-1 border border-green searchIcon" />
          </form>
        </div>
        <div className="mx-5"></div>
        <div className="ml-4">
          <div className="relative group">
            <a className="box-content relative z-20 inline-flex items-center h-8 p-3 bg-gray-200 border border-gray-200 cursor-pointer group-hover:border-gray-400 group-hover:border-b-0">
              <i className="w-10 h-full mr-3 basketIcon" />
              <span className="font-semibold leading-tight text-right text-gray-800 text-tiny">
                <span>My Basket</span>
                <br />
                <span>0 items</span>
              </span>
            </a>
            <div className="absolute right-0 z-10 hidden -mt-px top-full group-hover:block hover:block">
              <ul className="p-3 bg-gray-200 border border-gray-400">
                <li className="flex items-center justify-center h-20 text-sm text-gray-800 bg-white border border-gray-400 w-128">
                  Your basket is empty. Start shopping now!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex w-full h-10 border border-gray-400 border-solid">
          <li className="inline-block h-full bg-green">
            <a className="box-content flex items-center justify-between w-56 h-full px-2 text-white border-l border-r cursor-pointer border-green">
              <span className="font-semibold text-small">SHOP BY CATEGORY</span>
              <i className="w-3 h-2 dropdownIcon" />
            </a>
          </li>
          <li className="inline-block h-full hover:bg-green-dark">
            <a className="flex items-center h-full px-4 text-sm text-gray-700 cursor-pointer hover:text-white">
              <i className="w-4 h-4 mr-1 offersIcon" />
              <span>OFFERS</span>
            </a>
          </li>
          <li className="inline-block h-full hover:bg-green-dark">
            <a className="flex items-center justify-around h-full px-4 text-sm text-gray-700 cursor-pointer hover:text-white">
              <i className="w-5 h-4 mr-1 bbSpecialtyIcon" />
              <span>BB SPECIALTY</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
