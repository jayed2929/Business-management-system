
"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../src/lib/supabase/client";

export default function SupabaseTest() {
  const [status, setStatus] = useState("Checking connection...");

  useEffect(() => {
    async function testConnection() {
      const supabase = createClient();

      const { error } = await supabase.auth.getSession();

      if (error) {
        setStatus("Connection failed: " + error.message);
      } else {
        setStatus("Supabase connected successfully!");
      }
    }

    testConnection();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="rounded-xl border p-8 shadow-sm">
        <h1 className="text-2xl font-bold mb-4">
          Supabase Connection Test
        </h1>
        <p>{status}</p>
      </div>
    </main>
  );
}
