import React from 'react';
import { 
  TrendingUp,
  DollarSign,
  ShoppingBag,
  UserCheck
} from 'lucide-react';

function Dashboard() {
  const stats = [
    { title: 'Total Sales', value: '$124,563.00', icon: DollarSign, trend: '+12.5%', color: 'bg-blue-500' },
    { title: 'Total Orders', value: '1,345', icon: ShoppingBag, trend: '+8.2%', color: 'bg-purple-500' },
    { title: 'Active Users', value: '31,245', icon: UserCheck, trend: '+15.3%', color: 'bg-green-500' },
    { title: 'Conversion Rate', value: '3.15%', icon: TrendingUp, trend: '+2.4%', color: 'bg-orange-500' }
  ];

  const recentOrders = [
    { id: '#ORD-1234', customer: 'John Doe', product: 'iPhone 15 Pro', amount: '$999', status: 'Delivered' },
    { id: '#ORD-1235', customer: 'Jane Smith', product: 'MacBook Air', amount: '$1299', status: 'Processing' },
    { id: '#ORD-1236', customer: 'Mike Johnson', product: 'AirPods Pro', amount: '$249', status: 'Pending' },
    { id: '#ORD-1237', customer: 'Sarah Wilson', product: 'iPad Air', amount: '$599', status: 'Shipped' },
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <h3 className="text-2xl font-semibold mt-1">{stat.value}</h3>
                <p className="text-sm text-green-600 mt-2">{stat.trend}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon size={24} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-3">Order ID</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Product</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3">{order.id}</td>
                  <td className="py-3">{order.customer}</td>
                  <td className="py-3">{order.product}</td>
                  <td className="py-3">{order.amount}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;