import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>Nosotros</a>
          </Link>
        </menu>
      </nav>
    </div>
  );
}

export default Navbar
