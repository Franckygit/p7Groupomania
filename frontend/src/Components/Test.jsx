import React from 'react'
import '../Styles/test.css'
import picture from '../assets/20211030-IMG_8973.jpg'

const Test = () => {
    return (
        <section>
            <article className="post_container">
                <div className="row-1">
                    <div className="first-half">
                        <div className="post_name">
                            <i className="fa-solid fa-user"> Nom</i>
                        </div>
                    </div>
                    <div className="second-half">
                        <button className="btn_modify">
                            <i className="fa-solid fa-pen"></i>
                        </button>
                        <button className="btn_delete">
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div className="row-2">
                    <div className="post_content">
                        <div className="post_text">Tweet random</div>
                        <div className="post_image">
                            <img src={picture} alt="post_img" />
                        </div>
                    </div>
                </div>
                <div className="row-3">
                    <div className="like_dislike">
                        <button className="btn_like">
                            <i className="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button className="btn_dislike">
                            <i className="fa-regular fa-thumbs-down"></i>
                        </button>
                    </div>
                </div>
            </article>
            <article className="post_container">
                <div className="row-1">
                    <div className="first-half">
                        <div className="post_name">
                            <i className="fa-solid fa-user"> Nom</i>
                        </div>
                    </div>
                    <div className="second-half">
                        <button className="btn_modify">
                            <i className="fa-solid fa-pen"></i>
                        </button>
                        <button className="btn_delete">
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div className="row-2">
                    <div className="post_content">
                        <div className="post_text">
                            Tweet randomTweet randomTweet randomTweet
                            randomTweet randomTweet randomTweet randomTweet
                            randomTweet randomTweet randomTweet randomTweet
                            randomTweet randomTweet randomTweet randomTweet
                            randomTweet randomTweet randomTweet randomTweet
                            randomTweet randomTweet randomTweet randomTweet
                            randomTweet randomTweet randomTweet randomTweet
                            randomTweet randomTweet randomTweet randomTweet
                            randomTweet randomTweet randomTweet randomTweet
                            random
                        </div>
                        <div className="post_image">image</div>
                    </div>
                </div>
                <div className="row-3">
                    <div className="like_dislike">
                        <button className="btn_like">
                            <i className="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button className="btn_dislike">
                            <i className="fa-regular fa-thumbs-down"></i>
                        </button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Test
