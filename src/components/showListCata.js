import { Component } from "react";
import { Link, useParams } from "react-router-dom";
import Show1Product from "./Show1Product";
import { connect } from "react-redux";
import Weather from "./weather";
const ShowCata = (props)=> {

        let catalogs = props.loai.map((catalog, index) => {
            return (
                <li key={index}>
                    <Link to={`/catalog/${catalog.id}`}>{catalog.tenLoai}</Link>
                </li>
            )

        })
        
        let {id} = useParams()
        console.log(id);
        let listBook = props.arrPro.map((book, index) => {
            if(book.idloai==id){
                return (
                    <Show1Product key={index}
                        id={book.id}
                        author={book.tacGia}
                        name={book.tensach}
                        price={book.gia}
                        product={book}
                        url={book.urlHinh} />
                )
            }
        })
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


                <div className="small-container">
                    <div className="row-1">
                    <Link to="/products" > <h2 id="title">Tất cả sản phẩm</h2></Link>
                        <ul id="list-catalog">
                            {catalogs}
                        </ul>
                    </div>
                    
                    <div className="row-1" id="allProduct">
                        {listBook}
                    </div>
                </div>


                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col-1">
                                <h3>Tải ứng dụng</h3>
                                <p>Tải xuống bằng di dộng qua ios hoặc android</p>
                                <div className="app-logo">
                                    <img src="./images/app-store.png" alt="" />
                                    <img src="./images/play-store.png" alt="" />

                                </div>
                            </div>
                            <div className="footer-col-2">
                                <img src="../images/logo.png" alt="" />
                            </div>
                            <div className="footer-col-3">
                                <Weather />
                            </div>
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
const layData = (state)=>{
    return{
        arrPro:state.pro,
        loai:state.caT
    }
}
export default connect( layData, null)(ShowCata);