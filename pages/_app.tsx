import '../styles/globals.css'
import { Router } from 'next/router'
import { useCallback, useEffect } from 'react'
import { message } from 'react-message-popup'
import QP from 'qier-progress'
import Header from '../components/layouts/Header'
import Plum from '../components/widgets/Plum'

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

  useEffect(() => {
    try {
      registerRouterEvents()
    } finally {
      document.body.classList.remove('loading')
    }
  }, [])

  return (
    <>
      <Header />
      <main className="px-7 py-10">
        <Component {...pageProps} />
      </main>
      <Plum />
    </>
  )
}


export default App
