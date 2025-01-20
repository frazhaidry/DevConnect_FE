# Social Connection Platform (Frontend)

This project is a **user-friendly frontend application** designed to complement the backend of a **social connection platform**. It allows users to easily discover, interact, and build meaningful connections through an intuitive and responsive interface.

## Key Features

### 1. **User Interface**

- **Dynamic User Feed**:  
  Displays user profiles dynamically, filtering out already connected users or ignored/rejected profiles.
  
- **Responsive Design**:  
  Ensures compatibility across different devices with a clean and intuitive layout.
  
- **Profile Cards**:  
  Showcases user details such as photo, name, age, gender, and bio with actionable buttons for interaction.

### 2. **State Management with Redux Toolkit**

- **Centralized State Management**:  
  Uses **Redux Toolkit** for handling:
  - **User authentication details**.
  - **Feed data**.
  - **Connection requests and statuses**.
  
- **Efficient State Updates**:  
  Through **reducer functions** for seamless state management.

### 3. **API Integration with Axios**

- **Configured Axios Instance**:  
  Ensures consistent API calls with base URLs and cookie handling.
  
- **Features**:  
  - Sending **connection requests** (e.g., Interested or Ignore).
  - Managing user interactions with server endpoints efficiently.

### 4. **Authentication Flow**

- **Secure JWT-based Authentication**:  
  Handles **user sessions** and **authentication status** securely.
  
- **Conditional Rendering**:  
  UI changes based on authentication status (e.g., login/logout).

### 5. **Connection System**

- **Send Requests**:  
  Users can send connection requests marked as **"Interested"** or ignore profiles.
  
- **Connection Updates**:  
  Real-time feed updates when profiles are interacted with (e.g., removed after interaction).

### 6. **Code Modularity**

- **Reusable Components**:  
  Individual components like `UserCard` and `Feed` for better maintainability.
  
- **Clear Separation of Concerns**:  
  Using **slices** like `feedSlice`, `requestSlice` to manage different sections of the app.

### 7. **Routing with React Router**

- **Single Page Application (SPA)**:  
  Routes for different sections of the app:
  - **User Feed**
  - **Profile Management**
  - **Connections**
  - **Requests**

- **Organized Navigation Flow**:  
  Ensures easy navigation between pages.

### 8. **Error Handling**

- **Graceful Error Handling**:  
  API call errors are handled gracefully, with fallback mechanisms (e.g., logging errors and ensuring UI responsiveness).

---


## Technologies Used

- **React**
- **Redux Toolkit**
- **Axios**
- **React Router**
- **JWT Authentication**

---

## Contributing

Contributions are welcome! Please **fork the repository** and submit a pull request with your changes.