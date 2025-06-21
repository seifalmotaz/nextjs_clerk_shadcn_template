import { SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Clerk + Next.js
        </h1>
        <p className="text-xl text-gray-600">
          This app demonstrates Clerk authentication with Next.js App Router
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <SignedOut>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              You are not signed in
            </h2>
            <p className="text-gray-600 mb-6">
              Please sign in or create an account to continue.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="text-sm text-gray-500">
                Use the Sign In or Sign Up buttons in the header above
              </div>
            </div>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Welcome back!
            </h2>
            {user && (
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  User Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <span className="font-semibold text-gray-700">Email:</span>
                    <p className="text-gray-600">
                      {user.emailAddresses[0]?.emailAddress || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Name:</span>
                    <p className="text-gray-600">
                      {user.firstName && user.lastName
                        ? `${user.firstName} ${user.lastName}`
                        : user.username || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">User ID:</span>
                    <p className="text-gray-600 font-mono text-sm">{user.id}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Created:</span>
                    <p className="text-gray-600">
                      {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Unknown"}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <p className="text-gray-600 mb-4">
              You are successfully authenticated with Clerk! 🎉
            </p>
            <Link
              href="/protected"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
            >
              Visit Protected Page
            </Link>
          </div>
        </SignedIn>
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          Clerk Integration Features
        </h3>
        <ul className="space-y-2 text-blue-800">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            ✅ Clerk middleware configured with <code>clerkMiddleware()</code>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            ✅ App wrapped with <code>&lt;ClerkProvider&gt;</code>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            ✅ Authentication components from <code>@clerk/nextjs</code>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            ✅ Server-side user data with <code>currentUser()</code>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            ✅ Route protection with middleware
          </li>
        </ul>
      </div>
    </div>
  );
}
