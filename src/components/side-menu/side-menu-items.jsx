import IconDashboard from '@material-ui/icons/Dashboard'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import StoreIcon from '@material-ui/icons/Store'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import PaymentIcon from '@material-ui/icons/Payment'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import RoomServiceIcon from '@material-ui/icons/RoomService'
import EditIcon from '@material-ui/icons/Edit'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const SideMenuItems = [
  {
    name: 'Orderboard',
    link: '/orders',
    Icon: RoomServiceIcon,
  },
  {
    name: 'Dashboard',
    link: '/dashboard',
    Icon: IconDashboard,
  },
  {
    name: 'Customers',
    link: '/customers',
    Icon: IconPeople,
  },
  {
    name: 'Menu Setup',
    Icon: RestaurantMenuIcon,
    items: [
      {
        name: 'Tax Settings',
        link: '/tax-settings',
      },
      {
        name: 'Menu Configuration',
        link: '/menu-config',
      },
      {
        name: 'Checkout Configuration',
        link: '/checkout-config',
      },
      {
        name: 'Promo Configuration',
        link: 'promo-config',
      }
    ],
  },
  {
    name: 'Reports',
    Icon: IconBarChart,
    items: [
      {
        name: 'Products',
        link: '/reports/products',
      },
      {
        name: 'Customers',
        link: '/reports/customers',
      },
      {
        name: 'Orders',
        link: '/reports/orders',
      },
      {
        name: 'Addons',
        link: '/reports/addons',
      },
    ],
  },
  {
    name: 'Order Settings',
    link: '/order-settings',
    Icon: EditIcon,
  },
  {
    name: 'Menu Display',
    link: '/menu-display',
    Icon: MenuBookIcon,
  },
  {
    name: 'Store Settings',
    Icon: StoreIcon,
    items: [
      {
        name: 'Hours',
        link: '/hours',
        Icon: AccessTimeIcon,
      },
      {
        name: 'Payment Config',
        link: '/payment-config',
        Icon: PaymentIcon,
      },
      {
        name: 'Notifications',
        link: '/notification-settings',
        Icon: NotificationsIcon,
      },
    ],
  },
  {
    name: 'My Account',
    Icon: AccountBalanceIcon,
    items: [
      {
        name: 'Profile',
        link: '/organization-profile',
      },
      {
        name: 'Subscription',
        link: '/subscription',
      },
      {
        name: 'Users',
        link: '/users',
      },
    ],
  },
]


export default SideMenuItems