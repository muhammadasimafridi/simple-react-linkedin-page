import "./Post.css"

import likeIcon from "../assets/like-icon.svg";
import commentIcon from "../assets/comment-icon.svg";
import saveIcon from "../assets/save-icon.svg";
import shareIcon from "../assets/share-icon.svg";
import moreIcon from "../assets/more-icon.svg"
import crossIcon from "../assets/cross-icon.svg"

function Post({image, name, bio, desc, pic}) {
    return <>
        <section className="post-sec">
            <div className="post-header">
                <div className="poster-details">
                    <img src={image} alt="" />
                    <div className="post-header-details">
                        <h2>{name}</h2>
                        <span><h3>{bio}...</h3></span>
                    </div>
                </div>
                <div className="header-more">
                    <img src={moreIcon} alt="More Details Icon" />
                    <img src={crossIcon} alt="Hide Icon" />
                </div>
            </div>
            <p className="post-desc">{desc}</p>
            <img src={pic} alt="" />
            <div className="post-footer">
                <figure className="like-icon post-icon">
                    <img src={likeIcon} alt="Like Icon" />
                    <figcaption>Like</figcaption>
                </figure>
                <figure className="comment-icon post-icon">
                    <img src={commentIcon} alt="Comment Icon" />
                    <figcaption>Comment</figcaption>
                </figure>
                <figure className="save-icon post-icon">
                    <img src={saveIcon} alt="Save Icon" />
                    <figcaption>Save</figcaption>
                </figure>
                <figure className="share-icon post-icon">
                    <img src={shareIcon} alt="Share Icon" />
                    <figcaption>Share</figcaption>
                </figure>
            </div>
        </section>
    </>
}

export default Post;