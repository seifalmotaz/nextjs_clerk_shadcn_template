# Clerk + Next.js App Router Integration

This project demonstrates a complete integration of [Clerk](https://clerk.com/) with Next.js App Router following current best practices.

## Features

- ✅ **Current Clerk SDK**: Uses `@clerk/nextjs` with the latest App Router patterns
- ✅ **Middleware**: Configured with `clerkMiddleware()` from `@clerk/nextjs/server`
- ✅ **Provider Setup**: App wrapped with `<ClerkProvider>` in `app/layout.tsx`
- ✅ **Authentication Components**: Sign in/up buttons and user button in header
- ✅ **Server-side User Data**: Demonstrates `currentUser()` usage
- ✅ **Modern UI**: Styled with Tailwind CSS

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env.local` file with your Clerk keys:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## File Structure

```
├── src/
│   ├── middleware.ts          # Clerk middleware with clerkMiddleware()
│   └── app/
│       ├── layout.tsx         # ClerkProvider wrapper and auth components
│       ├── page.tsx           # Main page with auth status
│       └── globals.css        # Global styles
└── .env.local                 # Environment variables (not in repo)
```

## Key Implementation Details

### Middleware (`src/middleware.ts`)
- Uses `clerkMiddleware()` from `@clerk/nextjs/server`
- Configured with proper matcher patterns for Next.js App Router
- **Important**: Must be placed in `src/middleware.ts` when using the `src` directory structure

### Layout (`src/app/layout.tsx`)
- Wraps the entire app with `<ClerkProvider>`
- Includes authentication UI components in the header
- Uses `<SignedIn>`, `<SignedOut>`, `<SignInButton>`, `<SignUpButton>`, and `<UserButton>`

### Main Page (`src/app/page.tsx`)
- Demonstrates server-side user data fetching with `currentUser()`
- Shows different content for authenticated vs. unauthenticated users
- Displays user information when signed in

## Authentication Flow

1. **Unauthenticated users** see sign-in and sign-up buttons
2. **Clicking buttons** opens Clerk's modal authentication forms
3. **After authentication**, users see their profile information
4. **User button** in header provides account management options

## Important Notes

- This implementation follows the **current** Clerk documentation for Next.js App Router
- **Avoids deprecated patterns** like `authMiddleware()` or Pages Router approaches
- Uses **server-side rendering** for user data where appropriate
- Implements **proper TypeScript** types throughout
- **Middleware placement**: When using `src/` directory, middleware must be at `src/middleware.ts`

## Verification Steps

✅ **Middleware**: Uses `clerkMiddleware()` from `@clerk/nextjs/server`  
✅ **Layout**: App wrapped with `<ClerkProvider>` in `app/layout.tsx`  
✅ **Imports**: All references from `@clerk/nextjs` or `@clerk/nextjs/server`  
✅ **App Router**: Uses App Router structure (not `_app.tsx` or `pages/`)  
✅ **Environment**: Clerk keys properly configured in `.env.local`
