import Logo from "../../components/logo/logo";
import Menu from "../../components/list/menu";

export default function Nav() {
  return (
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

  )
}


