import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
    const user = await currentUser();

    if (!user) {
        redirect("/");
    }

    return (
        <div className="max-w-4xl mx-auto py-12">
            <div className="bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    Protected Page
                </h1>
                <p className="text-gray-600 mb-4">
                    This is a protected page that only authenticated users can access.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800">
                        ✅ You are authenticated as: <strong>{user.emailAddresses[0]?.emailAddress}</strong>
                    </p>
                </div>
            </div>
        </div>
    );
} 