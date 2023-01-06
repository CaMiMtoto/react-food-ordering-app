import {IconGrill, IconSalad, IconShoppingBag, IconShoppingCart} from "@tabler/icons";

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg py-3 navbar-dark  bg-transparent">
            <div class="container">
                <a class="navbar-brand" href="#">
                    Yummy
                </a>
                <button class="navbar-toggler rounded-0 shadow-none border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-success rounded-pill px-4 d-flex align-items-center gap-1 fw-bold position-relative "
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
