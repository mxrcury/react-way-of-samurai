import React from 'react'
import styles from './FriendsItem.module.css'

const FriendsItem = (props) => {
  return (
    <div className={styles.item}>
        <img src='https://www.shareicon.net/data/256x256/2016/09/15/829459_man_512x512.png' />
        {props.name}
    </div>
  )
}

export default FriendsItem
