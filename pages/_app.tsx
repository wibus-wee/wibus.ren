import '../styles/globals.css'
import { Router } from 'next/router'
import { useCallback, useEffect, useRef } from 'react'
import { message } from 'react-message-popup'
import QP from 'qier-progress'
import Header from '../components/layouts/Header'
import Plum from '../components/widgets/Plum'
import { Nav } from '../components/layouts/Nav'
import { preloadPlay } from '../utils/play.util'

function App({ Component, pageProps }) {

  const Progress = new QP({ colorful: false, color: '#27ae60' })
  const registerRouterEvents = useCallback(() => {
    Router.events.on('routeChangeStart', () => {
      // animation('out')

      Progress.start()
      // window.scrollTo({ top: 0, behavior: 'smooth' })
      history.backPath = history.backPath
        ? [...history.backPath, history.state.as]
        : [history.state.as]
    })

    Router.events.on('routeChangeComplete', () => {
      // animation('in')
      Progress.finish()
    })

    Router.events.on('routeChangeError', () => {
      // animation('in')
      history.backPath?.pop()
      Progress.finish()
      message.error('出现了未知错误, 刷新试试?')
    })
  }, [])

  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      registerRouterEvents()
      preloadPlay()
    } finally {
      setTimeout(() => {
        bodyRef.current?.classList.add('loaded')
      }, 300)
      setTimeout(() => {
        bodyRef.current?.classList.remove('loading')
      }, 600)
    }
  }, [])

  return (
    <div className='loading' ref={bodyRef}>
      <div className='_iucky backdrop-blur-sm w-screen h-full'>
        <Nav />
          <Header />
          <main className="py-10 z-50">
            <Component {...pageProps} />
          </main>
      </div>
      <Plum />
    </div>
  )
}


export default App
