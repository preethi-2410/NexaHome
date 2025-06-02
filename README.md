# Smart Home Dashboard

## Overview
A modern, responsive smart home management dashboard built with React and Material-UI. This application allows users to monitor and control various smart devices throughout their home, manage rooms, track energy consumption, and view device statuses at a glance.

## Features

### Home Management
- **Room Overview**: View all rooms in your home with their connected devices
- **Device Control**: Toggle devices on/off with a simple switch
- **Room Management**: Add, edit, and delete rooms
- **Device Management**: Add and remove devices from rooms

### Dashboard
- **Energy Consumption Tracking**: View energy usage data in daily, weekly, or monthly formats
- **Quick Access Devices**: Control frequently used devices from any room
- **Room Controls**: Expand/collapse room details to manage devices
- **Device Discovery**: Automatically discover new devices on your network

### User Management
- **User Authentication**: Basic login functionality with guest access option
- **Member Management**: View and manage household members with different access levels

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd project-internship
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Build for production
```bash
npm run build
```

5. Serve production build locally
```bash
serve -s build
```

## Project Structure

```
src/
├── components/         # React components
│   ├── Dashboard.jsx   # Main dashboard component
│   ├── Home.jsx        # Home overview component
│   ├── Login.jsx       # User authentication
│   ├── Sidebar.jsx     # Navigation sidebar
│   └── ...             # Other components
├── App.jsx             # Main application component
├── index.js            # Application entry point
└── ...
```

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Material-UI**: React component library implementing Google's Material Design
- **Recharts**: Composable charting library for data visualization
- **React Router**: Navigation and routing for React applications

## Future Enhancements

- Local storage for persistent data
- User authentication with backend integration
- Real-time device status updates
- Mobile application with React Native
- Voice control integration
- Scene creation and scheduling
- Advanced energy analytics
- Integration with actual smart home APIs (Google Home, Amazon Alexa, etc.)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
