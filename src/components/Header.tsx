import logo from "/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-center p-4 text-neutral-100">
      <div className="flex gap-2">
          <img src={logo} alt="Weather Now Logo" className="h-6" />
          <h1>Weather Now</h1>
      </div>
    </header>
  );
};

export default Header;
