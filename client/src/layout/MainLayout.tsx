import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import style from './MainLayout.module.css';

export default function MainLayout() {
  return (
    <div className={style.main}>
      <aside className={style.sidebar}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profilo</Link>
            </li>
            <li>
              <Link to="/product">Prodotti</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
