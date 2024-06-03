import React from 'react'
import styles from './Login.module.css'

const Login = () => {
  return (
  <div className={styles.container}>
<div className={styles.wrapper}>
<div className={styles.socialButton}>GOOGLE</div>
<div className={styles.socialButton}>GITHUB</div>
<div className={styles.socialButton}>FACEBOOK</div>

</div>
  </div>
  )
}

export default Login

