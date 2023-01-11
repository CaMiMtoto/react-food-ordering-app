import {IconGrill, IconSalad, IconShoppingBag, IconShoppingCart} from "@tabler/icons";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg py-3 navbar-dark  bg-transparent">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Yummy
                </a>
                <button className="navbar-toggler rounded-0 shadow-none border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-success rounded-pill px-4 d-flex align-items-center gap-1 fw-bold position-relative "
                               href="#">
                                <IconGrill className="tw-h-6 tw-w-6"/>
                                Your Cart
                                <span
                                    className="py-1 px-2 badge rounded-pill tw-bg-green-800">
                                    3
                                    <span className="visually-hidden">unread messages</span>
                                  </span>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}
