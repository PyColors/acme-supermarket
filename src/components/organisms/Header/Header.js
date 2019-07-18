import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="mui-appbar mui--z1">
    <div className="mui-container">
      <table>
        <tr className="mui--appbar-height">
          <td className="mui--text-title">Isomorphic Basket</td>
          <td className="mui--text-right">
            <ul className="mui-list--inline mui--text-body2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Checkout</Link>
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  </header>
);

export default Header;
