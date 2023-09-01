import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'
import { NaviItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NaviItem title="Home" icon={Home} />
      <NaviItem title="Dashboard" icon={BarChart} />
      <NaviItem title="Projects" icon={SquareStack} />
      <NaviItem title="Tasks" icon={CheckSquare} />
      <NaviItem title="Reporting" icon={Flag} />
      <NaviItem title="Users" icon={Users} />
    </nav>
  )
}
