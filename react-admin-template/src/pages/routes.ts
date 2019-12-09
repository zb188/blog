import AsyncComponent from '../components/Hoc/AsyncComponent'

const Home = AsyncComponent(() => import('./Login'))
const BI = AsyncComponent(() => import('./News'))
const NotFound = AsyncComponent(() => import('./404/NotFound'))

export interface IRoutes {
  component: React.ComponentType<any>,
  path?: string
}
const routes: IRoutes[] = [
  {path: '/', component: Home},
  {path: '/bi', component: BI},

  {component: NotFound},
]

export default routes




