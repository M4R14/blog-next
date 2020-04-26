import Head from 'next/head'
import Link from 'next/link'

const Layout = (props) => (
  <>
    <Head>
      <title>Open Blog </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
      <link rel="stylesheet" href={`${process.env.ASSET_PREFIX}/fontawesome-free-5.13.0-web/css/all.css`}  />
      <link rel="stylesheet" href={`${process.env.ASSET_PREFIX}/style.css`}  />
    </Head>
    <div>
      <div className="py-3 d-flex align-items-center header mb-5">
        <div className="container" >
          <div className="">
            <Link href="/" as={process.env.ASSET_PREFIX}>
              <a href={process.env.ASSET_PREFIX}>
                <h1 className="logo" > Open Blog </h1>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <main className="container" >
        <div className="row" >
          <div className="col-12 col-lg-9">
            {props.children}
            <hr className="mb-1" />
            <div className="w-100 text-right">
              <Link href="/" as={process.env.ASSET_PREFIX} >
                <a>
                  <i className="fas fa-home"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
    <footer className="d-flex align-items-center" style={{ height: '8em' }} >
      <div className="container" >
        <p >
          <a href="mailto:vachirawit.mark@gmail.com" className="text-secondary" >vachirawit.mark@gmail.com</a>
        </p>
      </div>
    </footer>
  </>
)

export default Layout