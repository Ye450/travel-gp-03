import React from "react";
import styles from "./style.module.css";

type Props = {
    itemDetailImage? :string
    itemDetailTitle? :string
    itemDetailText? :string
    itemDetailLink? :string
}
const BlogItemDetail:React.FC<Props> = ({itemDetailImage, itemDetailTitle, itemDetailText, itemDetailLink}) => {
    return(
        <div className={styles.blog_item_detail}>
            <div className={styles.blog_item__detail_img}>
                <a href="#">
                <img src={itemDetailImage} alt="blog"/>
                </a>
            </div>
            <div className={styles.blog_item_detail_txt}>
                <a href="#">
                <h3 className={styles.blog_item_detail_txt_h3}>{itemDetailTitle}</h3> 
                </a>
                <p className={styles.blog_item_detail_txt_p}>{itemDetailText}</p>
                <a href="#" className={styles.color}>{itemDetailLink}</a>
            </div>
        </div>
    )
}

export default BlogItemDetail;