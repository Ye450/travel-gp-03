import React from "react";
import styles from "./style.module.css";

type Props = {
    itemImage? :string
    itemTitle? :string
    itemText? :string
    itemLink? :string
}

const BlogItem:React.FC<Props> = ({itemImage, itemTitle, itemText, itemLink}) => {
    return(
        <div className={styles.blog_item}>
            <div className={styles.blog_item_img}>
                <a href="#">
                <img src={itemImage} alt="blog"/>
                </a>
            </div>
            <div className={styles.blog_item_txt}>
                <a href="#">
                <h3 className={styles.blog_item_txt_h3}>{itemTitle}</h3> 
                </a>
                <p className={styles.blog_item_txt_p}>{itemText}</p>
                <a href="#blog-detail" className={styles.color}>{itemLink}</a>
            </div>
        </div>
    )
}

export default BlogItem;