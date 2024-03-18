"use client";

import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main>
      <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
      {user ? (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <p>
            <Link href={"/week-8/shopping-list"}>Shopping List</Link>
          </p>
          <div className="text-lg">
            <button
              type="button"
              onClick={() => firebaseSignOut()}>
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <div className="text-lg">
          <button
            type="button"
            onClick={() => gitHubSignIn()}>
            Sign In with GitHub
          </button>
        </div>
      )}
    </main>
  );
};

export default page;
