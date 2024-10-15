import style from "../service/service.module.css";

const ServicePage=() => {
    return(
        <div className={style.container}>

            <h1 className={style.header}>This is service page</h1>
            <ul>
                <li><a href="/service/graphic-design">This is graphic designing page</a></li>
                <li><a href="/service/vedio-editing">This is vedio editing page</a></li>


            </ul>
        </div>
    )
};
export default ServicePage;