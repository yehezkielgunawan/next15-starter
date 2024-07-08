import { IoMoon, IoSunny } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-base-200">
      <nav className="navbar mx-auto max-w-4xl px-2 md:px-0">
        <div className="flex-1">
          <a href="/">NextJS 14 Template</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal">
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="rounded-t-none bg-base-100 p-2">
                  <li>
                    <a href="/">Link 1</a>
                  </li>
                  <li>
                    <a href="/">Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="dim"
                />

                <IoSunny className="swap-off h-4 w-4" />
                <IoMoon className="swap-on h-4 w-4" />
              </label>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
