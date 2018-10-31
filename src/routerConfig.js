// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideFooterLayout from './layouts/HeaderAsideFooterLayout';
// import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Home, About, Contact, Globals, Service, Product } from './pages/page';

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
    path: '*',
    layout: HeaderAsideFooterLayout,
    component: NotFound,
  },
];

export default routerConfig;
