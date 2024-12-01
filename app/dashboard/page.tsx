"use client";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import {
  RiDashboardLine,
  RiUserLine,
  RiSettings4Line,
  RiLogoutBoxLine,
  RiMoonLine,
  RiSunLine,
} from "react-icons/ri";
import { WorldMap } from "../components/ui/world-map";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            RefAid
          </h1>
        </div>

        <nav className="px-4 space-y-2">
          <Button
            variant="light"
            className="w-full justify-start gap-2 text-gray-700 dark:text-gray-300"
            startContent={<RiDashboardLine />}
          >
            Dashboard
          </Button>
          <Button
            variant="light"
            className="w-full justify-start gap-2 text-gray-700 dark:text-gray-300"
            startContent={<RiUserLine />}
          >
            Profile
          </Button>
          <Button
            variant="light"
            className="w-full justify-start gap-2 text-gray-700 dark:text-gray-300"
            startContent={<RiSettings4Line />}
          >
            Settings
          </Button>
        </nav>

        <div className="absolute bottom-20 px-4 w-64">
          <Button
            variant="light"
            className="w-full justify-start gap-2 px-4 text-gray-700 dark:text-gray-300"
            startContent={
              theme === "dark" ? (
                <RiSunLine className="text-xl" />
              ) : (
                <RiMoonLine className="text-xl" />
              )
            }
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        <div className="absolute bottom-4 px-4 w-64">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="w-full justify-start gap-2 px-4 text-gray-700 dark:text-gray-300"
                startContent={
                  <Avatar
                    src="/avatars/01.png"
                    alt="User"
                    className="w-6 h-6"
                    fallback="U"
                  />
                }
              >
                John Doe
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="User menu"
              className="text-gray-700 dark:text-gray-300"
            >
              <DropdownItem key="profile">My Account</DropdownItem>
              <DropdownItem
                key="logout"
                onClick={() => router.push("/")}
                startContent={<RiLogoutBoxLine />}
                className="text-danger"
              >
                Log out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Left Column - Stats */}
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Total Revenue
                </h2>
              </CardHeader>
              <CardBody>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  $45,231.89
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  +20.1% from last month
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Active Users
                </h2>
              </CardHeader>
              <CardBody>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  +2350
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  +180.1% from last month
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Projects
                </h2>
              </CardHeader>
              <CardBody>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  12
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  +3 from last month
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Right Column - World Map */}
          <Card>
            <CardHeader>
              <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Global Impact
              </h2>
            </CardHeader>
            <CardBody className="p-0">
              <div className="h-[280px]">
                <WorldMap />
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-6">
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Activity
            </h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <Avatar
                    src={`/avatars/0${item}.png`}
                    alt={`User ${item}`}
                    fallback={`U${item}`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      User {item}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Completed Project {item}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    2 hours ago
                  </p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </main>
    </div>
  );
}
