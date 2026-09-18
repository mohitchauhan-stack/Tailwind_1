const Navbar = () => {
  const links = [
    {
      title: "Guide",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Login",
      href: "#",
    },
  ];

  return (
    <div className="navbar_root flex justify-between items-center py-6">
      <h1 className="logo font-bold text-3xl">Fintea</h1>
      <div className="nav_links flex gap-4 items-end">
        {links.map((link, idx) => (
          <a
            key={link.title}
            href={link.href}
            className="text-2xl text-neutral-600 hover:text-black transition-colors duration-200"
          >
            {link.title}
          </a>
        ))}
        <button className="text-2xl text-white shadow-[0_2px_3px_0px_rgba(0,0,0,0.3)] bg-sky-400 px-5 py-1.5 rounded-[10px] cursor-pointer hover:bg-sky-500/90 hover:shadow-[0_3px_4px_0px_rgba(0,0,0,0.3)] transition-colors duration-300">
          <p className="text-shadow-[0_1.5px_1px_rgb(0_0_0/_.9)]">
            Start free trail
          </p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
