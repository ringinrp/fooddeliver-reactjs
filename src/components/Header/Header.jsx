import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header-contents">
            <h2>Kami punya banyak pilihan untuk kamu pilih.</h2>
            <p>Pilih makanan yang kamu suka dan dapatkan diskon untuk makanan di bulan ini, <b>GRATIS</b> biaya pengiriman selama diskon berlangsung</p>
            <button> View Menu</button>
        </div>
    </div>
  );
}

export default Header;
