// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideFooterLayout from './layouts/HeaderAsideFooterLayout';
// import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Home, About, Contact, Globals, Service, Product } from './pages/page';
import Editor from './pages/editor';
import Price from './pages/price';
import Msg from './pages/msg';

const routerConfig = [
  {
    path: '/',
    layout: HeaderAsideFooterLayout,
    component: Home,
  },
  {
    path: '/about',
    layout: HeaderAsideFooterLayout,
    component: About,
  },
  {
    path: '/contact',
    layout: HeaderAsideFooterLayout,
    component: Contact,
  },
  {
    path: '/product',
    layout: HeaderAsideFooterLayout,
    component: Product,
  },
  {
    path: '/globals',
    layout: HeaderAsideFooterLayout,
    component: Globals,
  },
  {
    path: '/service',
    layout: HeaderAsideFooterLayout,
    component: Service,
  },
  {
    path: '/editor',
    layout: HeaderAsideFooterLayout,
    component: Editor,
  },
  {
    path: '/price',
    layout: HeaderAsideFooterLayout,
    component: Price,
  },
  {
    path: '/message',
    layout: HeaderAsideFooterLayout,
    component: Msg,
  },
  {
    path: '*',
    layout: HeaderAsideFooterLayout,
    component: NotFound,
  },
];

export default routerConfig;
