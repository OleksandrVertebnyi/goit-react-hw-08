// import css from './Layout.module.css';
// import AppBar from '../AppBar/AppBar';

// export default function Layout({ children }) {
//   return (
//     <div className={css.wrapper}>
//       <div className={css.card}>
//         <AppBar />
//         <main className={css.main}>{children}</main>
//       </div>
//     </div>
//   );
// }
// src/components/Layout/Layout.jsx
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={css.wrapper}>
      <AppBar />
      <main className={css.main}>
        
        <Outlet />
      </main>
    </div>
  );
}
