import React from 'react';
import styles from './channels.module.css';

const Channels = ({onClickedChannel}) => {
  
    console.log('Channel Clicked!!!!')

  return (
    <section className={styles.channelsBar}>
    <ul className={styles.channels}>
      <li 
      className={styles.channel}
      onClick={()=>  onClickedChannel("UC_4u-bXaba7yrRz_6x6kb_w")}
      >
        <div className={styles.container}>
          <img 
          className={styles.thumbnail}
          src="https://yt3.ggpht.com/ytc/AKedOLRfd_D7OLG7kY-j4nhX9VD-q4phRC-ErDTVn58gNw=s176-c-k-c0x00ffffff-no-rj" 
          alt="ellie" 
          />
          <p className={styles.title}>Dream Coding</p>
        </div>
      </li>

      <li 
      className={styles.channel}
      onClick={()=>  onClickedChannel("UCUpJs89fSBXNolQGOYKn0YQ")}
      >
        <div className={styles.container}>
          <img 
          className={styles.thumbnail}
          src="https://yt3.ggpht.com/ytc/AKedOLTUh5DI9RQkZcNRxzVqXMfyO2jB99F1k49ttgFbrA=s176-c-k-c0x00ffffff-no-rj" 
          alt="Nomad Coders" 
          />
          <p className={styles.title}>Nomad Coders</p>
        </div>
      </li>


      <li 
      className={styles.channel}
      onClick={() => onClickedChannel("UC7iAOLiALt2rtMVAWWl4pnw")}
      >
        <div className={styles.container}>
          <img 
          className={styles.thumbnail}
          src="https://yt3.ggpht.com/ytc/AKedOLSQ4KN1ViJWQwt1wNw3vpFjtd9_4eDL1OYcBK0i9Q=s176-c-k-c0x00ffffff-no-rj" 
          alt="나도코딩" 
          />
          <p className={styles.title}>Nado Coding</p>
        </div>
      </li>

      <li 
      className={styles.channel}
      onClick={() => onClickedChannel("UCQNE2JmbasNYbjGAcuBiRRg")}
      >
        <div className={styles.container}>
          <img 
          className={styles.thumbnail}
          src="https://yt3.ggpht.com/ytc/AKedOLRLGbZKY0dWUIDP18tr4UrWUK51Z5XyeXRhGgGP=s176-c-k-c0x00ffffff-no-rj" 
          alt="조코딩" 
          />
          <p className={styles.title}>Jo Coding</p>
        </div>
      </li>

    </ul>
    

  </section>
  )
}
  

export default Channels;