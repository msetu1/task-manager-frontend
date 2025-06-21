"use client"
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserContext";

const HomePage = () => {
   const user = useUser();
   console.log(user)
  return (
    <div>
      <h2>Home page</h2>
      <Button>login</Button>
    </div>
  );
};

export default HomePage;