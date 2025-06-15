import { getTranslations } from "next-intl/server";
import { NavLinkI } from "./type";
import LanguageSelect from "./Components/LangaugeSelect";
import { ThemeSwitcher } from "./Components/ThemeSwitcher";
import Profile from "./Components/Profile";
import Logo from "./Components/Logo";
import NavItemsMobile from "./Mobile/NavItemsMobile";
import NavBar from "./Components/NavBar";

const Header = async () => {
  const t = await getTranslations("navbarlinks");

  const linksData: NavLinkI[] = [
    {
      id: 1,
      title: t("aboutus"),
      url: "aboutus",
      isPage: true,
    },
    {
      id: 2,
      title: t("services.services"),
      url: "services",
      isPage: false,
      isDropDown: [
        {
          id: 1,
          title: t("services.mainservices"),
          url: "services",
          isPage: false,
        },
        {
          id: 2,
          title: t("services.packages"),
          url: "packages",
          isPage: false,
        },
      ],
    },
    {
      id: 3,
      title: t("platform"),
      url: "platform",
      isPage: true,
    },
    {
      id: 4,
      title: t("training"),
      url: "training",
      isPage: true,
    },
    {
      id: 5,
      title: t("news"),
      url: "news",
      isPage: true,
    },
    {
      id: 6,
      title: t("contactus"),
      url: "contactus",
      isPage: false,
    },
  ];
  return (
    <header className="px_padding xl:py-[12px] lg:py-[12px] md:py-[12px] sticky top-0 z-50 bg-mainblack">
      <div className="drawer z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar">
            <div className="navbar-start">
              <div className="hidden xl:block lg:block">
                <Logo />
              </div>
              <div className="lg:hidden">
                <label
                  htmlFor="my-drawer"
                  className="md:size-[30px] sm:size-[25px] text-white xs:size-[25px] bg-white rounded-sm flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-[15px] text-[#FF7701]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
              </div>
            </div>
            <NavBar linksData={linksData} />
            <div className="navbar-end ">
              <div className="hidden lg:block">
                <ThemeSwitcher />
              </div>
              <div className="hidden lg:block">
                <LanguageSelect />
              </div>
              <Profile />
            </div>
          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="bg-dark-bodyBg  h-[100vh] w-[80%]">
            <NavItemsMobile linksData={linksData} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
