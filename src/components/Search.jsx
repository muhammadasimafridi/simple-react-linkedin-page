import "./Search.css"
import videoImg from "../assets/video-icon.svg";
import photoImg from "../assets/photo-icon.svg";
import articleImg from "../assets/article-icon.svg";
import devImage from "../assets/Muhammad-Asim-Afridi-Professional-Img.png";

function Search() {
    return <>
        <section className="search-sec">
            <div className="search">
                <img src={devImage} alt="" />
                <input type="text" name="searchInput" id="searchInput" placeholder="Start a Post" />
            </div>
            <div className="posting-items">
                <figure>
                    <img src={videoImg} alt="Video Icon" />
                    <figcaption>Video</figcaption>
                </figure>
                <figure>
                    <img src={photoImg} alt="Video Icon" />
                    <figcaption>Photo</figcaption>
                </figure>
                <figure>
                    <img src={articleImg} alt="Video Icon" />
                    <figcaption>Write Article</figcaption>
                </figure>
            </div>
        </section>
    </>
}

export default Search;