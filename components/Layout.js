import Head from 'next/head'
import Link from 'next/link'

const Layout = (props) => (
  <>
    <Head>
      <title>Open Blog </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
    </Head>
    <div>
      <div className="py-3 d-flex align-items-center" style={{
        borderBottom: 'solid 1px #dee2e6',
        marginBottom: '3em',
        height: '8em',
      }} >
        <div className="container" >
          <div className="">
            <Link href="/">
              <h1 className="logo" > Open Blog </h1>
            </Link>
          </div>
        </div>
      </div>
      <main className="container" >
        <div className="row" >
          <div className="col-9">
            {props.children}
          </div>
          <div className="col-3"></div>
        </div>
      </main>
    </div>
    <footer className="d-flex align-items-center" style={{ height: '8em' }} >
      <div className="container" >
        <p className="text-secondary">
          vachirawit.mark@gmail.com
        </p>
      </div>
    </footer>
  </>
)

export default Layout