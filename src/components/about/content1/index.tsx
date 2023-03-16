import React from 'react';
import styles from '././style.module.css';

type Props = {
  title: string
  text: string

}

const Title1: React.FC<Props> = ({ title, text }) => {
  return (
    <div className={styles.about_content1}>
      <div className={styles.content1}>
        <div className={styles.boxs}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>

      </div>
      <div className={styles.content1_img}>
        <img
          src="https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-taryn-elliott-3889687-1638x2048.jpg"
          alt=""
        />
      </div>
    </div>

  )
}

export default Title1;