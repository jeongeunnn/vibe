import Header from './Header';
import Footer from './Footer';
import Player from './Player';
import Content from './Content';

function Layout(props) {

  return (
    <div className={props.isMainPage ? 'main' : 'page'}>
      {
        props.isMainPage
        ? <>
            <Header />
            <div className="container">
              <Content />
            </div>
            <Footer />
            <Player />
          </>
        :<Content />
      }
    </div>
  )
}

export default Layout;