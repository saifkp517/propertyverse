import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/navbar.css'
import Link from 'next/link';


export default function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-custom" style={{ backgroundColor: "black" }}>
                <Link className="navbar-brand" href="/">PropertyVerse</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" href="#">Action</Link>
                                <Link className="dropdown-item" href="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="#">Something else here</Link>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
