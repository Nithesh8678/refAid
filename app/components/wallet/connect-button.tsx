"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { useEffect } from "react";

export function ConnectButton() {
  const router = useRouter();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      router.push("/dashboard");
    }
  }, [isConnected, router]);

  const handleConnect = () => {
    // Add your wallet connection logic here
    console.log("Connecting wallet...");
  };

  return (
    <Button 
      color="primary"
      onClick={handleConnect}
    >
      Get Started
    </Button>
  );
} 