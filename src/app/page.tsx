"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch("/api/user");
      if (response.ok) {
        const data = await response.json();
        setUser({ name: data.name });
      } else {
        router.push("/sign-in");
      }
    }
    fetchUser();
  }, [router]);


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold">
        {user ? `Bem-vindo, ${user.name}!` : "Redirecionando..."}
      </h1>
      <p className="text-lg mt-2">Seu sistema de gerenciamento de pedidos</p>
    </main>
  );
}
