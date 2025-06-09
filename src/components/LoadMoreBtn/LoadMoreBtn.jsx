import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  <div className={s.wrapper}>
    <button onClick={onClick}>Load More</button>
  </div>;
};

export default LoadMoreBtn;
