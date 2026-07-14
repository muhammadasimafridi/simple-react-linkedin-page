import "./Header.css"
import searchIcon from "../assets/search-icon.svg"

function Header() {
    return <>
        <header className="header">
            <div className="linkedin-name">
                <a href="#">LinkedIn</a>
                <input type="text" name="search-linkedin" id="search-linkedin" placeholder="Search on LinkedIn" />
            </div>
        </header>
    </>
}

export default Header;