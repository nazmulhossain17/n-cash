import { useSelector } from 'react-redux';

const DashboardLayout = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div>DashboardLayout</div>
  )
}

export default DashboardLayout