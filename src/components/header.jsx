
function Header() {
  return (
    <nav className="bg-grey border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="#projects"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View My Work</button></a>
      
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border text-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
      <li>
        <a href="#about" class="block py-2 px-3 md:p-0 text-white rounded hover:text-gray-900  md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent" aria-current="page">About</a>
      </li>
      <li>
        <a href="#projects" className="block py-2 px-3 md:p-0 text-white rounded hover:text-gray-900  md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Projects</a>
      </li>
      <li>
        <a href="#contact" className="block py-2 px-3 md:p-0 text-white rounded hover:text-gray-900  md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Contact</a>
      </li>
      
    </ul>
  </div>
  </div>
</nav>
  );
}

export default Header;