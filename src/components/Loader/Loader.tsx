import { PuffLoader } from "react-spinners";
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={style.loader}>
      <PuffLoader color="#41d782" />
    </div>
  );
}
