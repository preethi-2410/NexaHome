import React, { useState } from 'react';
import axios from 'axios';

const DeviceDiscovery = () => {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const scanDevices = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://localhost:5000/api/discover');
            if (response.data.success) {
                setDevices(response.data.devices);
            } else {
                setError('Failed to discover devices');
            }
        } catch (err) {
            setError(err.message || 'Failed to connect to the server');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Network Device Discovery</h2>
                
                <button
                    onClick={scanDevices}
                    disabled={loading}
                    className={`px-6 py-3 rounded-lg font-semibold text-white 
                        ${loading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-blue-600 hover:bg-blue-700'
                        } transition-colors duration-200`}
                >
                    {loading ? (
                        <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Scanning...
                        </span>
                    ) : (
                        'Scan Devices on Wi-Fi'
                    )}
                </button>

                {error && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}

                {devices.length > 0 && (
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Discovered Devices</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Type</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Port</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {devices.map((device, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{device.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.ip || 'N/A'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.service}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.port || 'N/A'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {!loading && devices.length === 0 && !error && (
                    <div className="mt-8 text-center text-gray-500">
                        No devices discovered yet. Click the button above to start scanning.
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeviceDiscovery; 