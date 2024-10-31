import style from "../about/about.module.css";

const AboutPage=() => {
    return(
        <div className= {style.container}>


            <h1 className={style.header}>This is about page</h1>


            
      <ul>

        <li><a href="/">Go to Home Page</a></li>
        <li><a href="/contact">Go to Contact Page</a></li>
        <li><a href="/service">Go to Service Page</a></li>

        
        </ul>

        </div>
    )
};
export default AboutPage;

        




   