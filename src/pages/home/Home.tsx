import Logo from "../../components/logo/logo";
import Menu from "../../components/list/menu";
import Mvisual from "../../components/visual/visual";

export default function Home() {
  return (
    <div className="bg">
      <header>
        <div className="l-wrap-outer">
          <div className="l-wrap-inner">
            <nav>
              <Logo />
              <Menu />
            </nav>
          </div>
        </div>
      </header>
      <div className="p-mainvisual">
        <div className="l-wrap-outer">
          <div className="l-wrap-inner">
            <Mvisual />
          </div>
        </div>
      </div>
    </div>

  )
}





