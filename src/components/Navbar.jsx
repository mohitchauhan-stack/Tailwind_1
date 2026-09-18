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
    <div className="navbar_root flex justify-between items-center py-2">
      <h1 className="logo font-bold text-2xl">Fintea</h1>
      <div className="nav_links flex gap-2">
        {links.map((link, idx) => (
          <a key={link.title} href={link.href} className="">
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
