import Head from 'next/head'
import Link from 'next/link'

const Layout = (props) => (
  <div>
    <Head>
      <title>PairHub</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
    </Head>
    <div>
      <div className="py-3" >
        <h1 className="text-center">Open Blog</h1>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link active" href="#">About Us</a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
      <main className="container" >
        {props.children}
      </main>
    </div>
  </div>
)

export default Layout