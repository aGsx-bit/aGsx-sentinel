"use client";

import { useEffect, useState } from "react";

import { Check, KeyRound, LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/lib/auth";
import { cn, getInitials } from "@/lib/utils";

import { ChangePasswordDialog } from "./change-password-dialog";

export function AccountSwitcher({
  users,
}: {
  readonly users: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly avatar: string;
    readonly role: string;
  }>;
}) {
  const { t } = useTranslation();
  const [activeUser, setActiveUser] = useState(users[0]);
  const [pwOpen, setPwOpen] = useState(false);

  useEffect(() => {
    if (users[0]) setActiveUser(users[0]);
  }, [users]);

  function handleLogout() {
    auth.clearToken();
    window.location.href = "/login";
  }

  if (!activeUser) {
    return null;
  }

  const activeName = "aGsx";

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="size-8 rounded-lg cursor-pointer">
            <AvatarImage src={activeUser.avatar || undefined} alt={activeName} />
            <AvatarFallback className="bg-[#662D91] text-white font-bold text-xs">{getInitials(activeName)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-56 space-y-1 rounded-lg" side="bottom" align="end" sideOffset={4}>
          {users.map((user) => {
            const userName = "aGsx";
            return (
              <DropdownMenuItem
                key={user.email || user.id}
                className={cn("p-0", user.id === activeUser.id && "bg-accent/50")}
                aria-current={user.id === activeUser.id ? "true" : undefined}
                onClick={() => setActiveUser(user)}
              >
                <div className="flex w-full items-center gap-2 px-1 py-1.5">
                  <Avatar className="size-9 rounded-lg">
                    <AvatarImage src={user.avatar || undefined} alt={userName} />
                    <AvatarFallback className="bg-[#662D91] text-white font-bold text-xs">{getInitials(userName)}</AvatarFallback>
                  </Avatar>
                  <div className="grid min-w-0 flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{userName}</span>
                    <span className="truncate text-xs capitalize">{user.role || "Operator"}</span>
                  </div>
                  <span
                    className={cn(
                      "mr-1 flex size-5 items-center justify-center rounded-full text-primary opacity-0",
                      user.id === activeUser.id && "opacity-100",
                    )}
                  >
                    <Check aria-hidden="true" />
                  </span>
                </div>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setPwOpen(true)}>
            <KeyRound />
            {t("account.changePassword")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
            <LogOut />
            {t("account.logout")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ChangePasswordDialog open={pwOpen} onOpenChange={setPwOpen} />
    </>
  );
}
