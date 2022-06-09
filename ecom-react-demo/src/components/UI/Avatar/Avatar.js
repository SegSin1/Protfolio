import classes from './Avatar.module.css'

const Avatar = ({
  children,
  imgSrc,
  iconColor,
  className,
  isHeader,
  text,
  hasNotifications,
}) => (
  <div className={classes[`tl-avatar`]} style={{ position: "relative", backgroundColor:iconColor }}>
    {imgSrc ? (
      <img
        alt={"user profile pic"}
        style={{ border: "none", }}
        className={classes[`tl-avatar`]}
        src={imgSrc}
      />
    ) : (
      text
    )}
    {/* {isHeader && (
      <div
        className={classes[`header-avatar-counter`]}
      >
        59
      </div>
    )} */}
  </div>
);
export default Avatar;