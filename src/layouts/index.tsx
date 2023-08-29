import { useSession, signOut, signIn } from "next-auth/react";
import { api } from "~/utils/api";

const Nav = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <div className="flex w-full justify-between px-8">
        <h1 className="text-fg text-4xl font-extrabold tracking-tight">
          Picks
        </h1>
        <AuthShowcase />
      </div>
      {children}
    </main>
  );
};

export default Nav;

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-black">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
