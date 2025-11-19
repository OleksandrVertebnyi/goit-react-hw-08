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
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      <main className={css.main}>{children}</main>
    </div>
  );
}


