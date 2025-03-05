import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  ShoppingCart,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

function Analytics() {
  const metrics = [
    {
      title: 'Revenue Growth',
      value: '+32.40%',
      trend: 'up',
      change: '+4.65%',
      description: 'vs last month'
    },
    {
      title: 'New Customers',
      value: '2,345',
      trend: 'up',
      change: '+12.80%',
      description: 'vs last month'
    },
    {
      title: 'Average Order Value',
      value: '$235.00',
      trend: 'down',
      change: '-2.35%',
      description: 'vs last month'
    },
    {
      title: 'Total Orders',
      value: '1,456',
      trend: 'up',
      change: '+8.24%',
      description: 'vs last month'
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Analytics</h2>
        <select className="border rounded-lg px-4 py-2">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
          <option>Last year</option>
        </select>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
              {metric.trend === 'up' ? (
                <ArrowUp className="text-green-500" size={20} />
              ) : (
                <ArrowDown className="text-red-500" size={20} />
              )}
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold">{metric.value}</p>
              <span className={`ml-2 text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-500">{metric.description}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <div className="h-80 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <p className="text-gray-500">Revenue Chart Placeholder</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Sales Analytics</h3>
          <div className="h-80 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <p className="text-gray-500">Sales Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;