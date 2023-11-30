import Link from 'next/link'


function navigation() {
  return (

<nav className="navbar  bg-dark" >
<div className='container'>
  <Link href="/" >
  <button className="btn btn-outline-success ms-auto" type="button" >Home</button>
  </Link>
<ul className=' ms-auto' >
<form className="container-fluid justify-content-start">

  <Link href="/about" >
  <button className="btn btn-outline-success me-2" type="button" >ABOUT</button>
  </Link>
  <Link href="/services" >
  <button className="btn btn-outline-success me-2" type="button">SERVICES</button>
  </Link>
</form>
</ul>
</div>
</nav>
  )
}

export default navigation
