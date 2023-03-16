import React from 'react';
import styles from '././style.module.css';

type Props = {
  title: string
  text: string

}

const Title2: React.FC<Props> = ({ title, text }) => {
  return (
    <div className={styles.about_content2}>
      <div className={styles.content2_img}>
        <img
          src="https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-alex-azabache-4171211-scaled.jpg"
          alt=""
        />
      </div>
      <div className={styles.content2}>
        <div className={styles.boxs2}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Title2;