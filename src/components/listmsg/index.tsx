import React from 'react';
import Styles from "./style.module.css"

type Props = {
  item: item;

};
export type item = {
  name: string;
  email: string;
  msg: string


};

const ListMsg: React.FC<Props> = ({ item }) => {



  return (


    <div className={Styles.innermsg}>
      <h2>{item.name}</h2>

      <p>{item.email}</p>
      <p>{item.msg}</p>
    </div>


  );
};
export default ListMsg;