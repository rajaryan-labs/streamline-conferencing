import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-dark-2">
      <SignIn />
    </main>
  );
}
