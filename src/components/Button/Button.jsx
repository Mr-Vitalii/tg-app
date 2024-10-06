import styles from "./Button.module.scss";

// export const Button = (props) => {

//   const { text = "", onClick } = props;

//   return (
//       <button className={styles.button} onClick={onClick}>{text}</button>
//   )
// }

export const Button = ({ className = "", ...props }) => {



  return <button {...props} className={`${styles.button} ${className || ""}`} />;
};
