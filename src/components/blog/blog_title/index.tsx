import React from "react";
import styles from "./style.module.css";

type Props = {
    titleName? :string
}
const BlogTitle:React.FC<Props> = ({titleName}) => {
    return(
        <h2 className={styles.blog_title_h2}>{titleName}</h2>
    )
}

export default BlogTitle;