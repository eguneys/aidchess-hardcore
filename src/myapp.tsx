import { createSignal, createEffect, on } from 'solid-js'
import { hashIntegration, useNavigate, Router, Routes, Route, A} from '@solidjs/router'
import { lazy } from 'solid-js'
import { Socket, generic_handlers } from './socket'
import { MetaProvider } from '@solidjs/meta'

const About = lazy(() => import('./about'))
const MainPage = lazy(() => import('./home'))
const Hardcore = lazy(() => import('./hardcore'))

type Redirect = { redirect: string }

export const MyApp = () => {
  return (<>
      <Router source={hashIntegration()}>
        <MetaProvider>
          <AppInRouter/>
        </MetaProvider>
      </Router>
      </>)
}


const AppInRouter = () => {

  return (<>
      <div class='liheadsup'>
          <div class='navbar'>
            <div class='title'>
              <A href="/"> aidchess<span>.com</span></A>
            </div>
            <div class="dasher">
            </div>
    
          </div>
          <div class='main'>
            <Routes>
              <Route path="/" component={MainPage}/>
              <Route path="/about" component={About}/>
              <Route path="/hardcore" component={Hardcore}/>
            </Routes>
          </div>
        </div>
      </>)

}


