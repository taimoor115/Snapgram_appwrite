import { bottombarLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom";

const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className="bottom-bar">
      {bottombarLinks.map((links) => {
        const isActive: boolean = pathname === links.route;
        return (
          <Link
            className={`${
              isActive && "bg-primary-500 rounded[10px]"
            } flex-center flex-col transition gap-1 p-2`}
            key={links.label}
            to={links.route}
          >
            <img
              src={links.imgURL}
              alt={links.label}
              height={16}
              width={16}
              className={`${isActive && "invert-white"}`}
            />
            <p className="tiny-medium text-light-2"> {links.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
