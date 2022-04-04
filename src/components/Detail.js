// import { Component } from "react";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";
import { arrSach } from '../data'
import Show1Product from './Show1Product'
import axios from 'axios';
import { actShowId } from "../action/actProduct";
import { addToCart } from "../action/actCart";

const description = () => {
    document.querySelector(`#desc`).style.transform = `translateX(0px)`;
    document.querySelector(`#review`).style.transform = `translateX(0px)`;
    document.querySelector(`#tabpane_indicator`).style.transform = `translateX(0px)`;
}
const review = () => {
    document.querySelector(`#desc`).style.transform = `translateX(-1030px)`;
    document.querySelector(`#review`).style.transform = `translateX(-1030px)`;
    document.querySelector(`#tabpane_indicator`).style.transform = `translateX(125px)`;
}
function Detail(props) {

    const product = useSelector(state => state.proId)
    const dispatch = useDispatch()
    let {id} = useParams ()
    const fetchById = async () => {
        const response = await axios.get(`http://localhost:3500/sanPham/${id}`).catch(err => {
            console.log(err);
        })
        console.log(response);
        dispatch(actShowId(response.data))

    }
    useEffect(() => {
        fetchById()
    }, [id])
    let relatedBook = arrSach.filter(book => book.idLoai == product.idLoai)
    console.log(relatedBook);

    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/"><img src="../images/logo.png" alt="" width="125px" /></Link>
                    </div>
                    <nav>
                        <ul id="menuItem">
                        <li><Link to="/">Trang Chủ</Link></li>
                                <li><Link to="/products">Sản Phẩm</Link></li>
                                <li><Link to="/account">Tài Khoản</Link></li>
                        </ul>
                    </nav>
                    <Link to="/cart"><img src="../images/cart.png" width="30px" height="30px" alt="" /></Link>
                    <img src="../images/menu.png" alt="" className="menu-icon" />
                </div>
            </div>

            {/* single product detail */}

            <div className="small-container single-product" id="detailProduct">
                <div className="row">
                    <div className="col-2">
                        <img src={`${product.urlHinh}`} alt="" width="100%" id="productImg" />
                    </div>
                    <div className="col-2">
                        <h1>{product.tensach}</h1>
                        <h4>{product.tacGia}</h4>
                        <h4>{product.gia} vnd</h4>
                        
                        <button className="btn" onClick={()=>dispatch(addToCart(product))}>Mua</button>
                        <h3>Chi tiết sản phẩm</h3>
                        <br />
                        <p>{product.mota}
                        </p>
                    </div>
                </div>
                <div className="detail">
                    <div className="tabpane">
                        <span onClick={description}>Mô tả</span>
                        <span onClick={review}>Đánh giá</span>
                        <hr id="tabpane_indicator" />
                    </div>
                    <div className="content">
                        <div className="desc" id="desc">
                            <p>{product.mota}</p>
                        </div>
                        <div className="review" id="review">
                            <form action="" className="form_review" id="reviewForm">
                                <textarea rows="3" type="text" className="f_review"></textarea>
                                <button className="btn_review" >Bình luận</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

           

            <div className="small-container">
                <div className="row" id="related">
                    {relatedBook.map((book, index) => {
                        return (
                            <Show1Product key={index}
                                id={book.id}
                                product={book}
                                author={book.tacGia}
                                name={book.tensach}
                                price={book.gia}
                                url={`${book.urlHinh}`} />
                        )
                    })}
                </div>
            </div>

            {/* footer */}
            <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col-1">
                                <h3>Tải ứng dụng</h3>
                                <p>Tải xuống bằng di dộng qua ios hoặc android</p>
                                <div className="app-logo">
                                    <img src="../images/app-store.png" alt="" />
                                    <img src="../images/play-store.png" alt="" />

                                </div>
                            </div>
                            <div className="footer-col-2">
                                <img src="../images/logo.png" alt="" />
                            </div>
                            {/* <div className="footer-col-3">
                                <h3>Useful Links</h3>
                                <ul>
                                    <li>Coupons</li>
                                    <li>Blog Posts</li>
                                    <li>Return Policy</li>
                                    <li>Join Affiliate</li>
                                </ul>
                            </div> */}
                            <div className="footer-col-4">
                                <h3>Theo dõi</h3>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                    <li>Youtube</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <p className="copyright">Sinh Viên: Ừng Quốc Đạt - PS14131</p>
                    </div>
                </div>
        </div>
    )
}

export default Detail