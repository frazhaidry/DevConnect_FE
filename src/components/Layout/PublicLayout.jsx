import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-light-background text-light-text">
     
      
      <main className="flex-1 w-full">
        <Outlet />
      </main>

     
    </div>
  );
};

export default PublicLayout;
