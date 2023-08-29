import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Nav from "~/layouts";

const UserPage = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <Nav>
      {session.data?.user.id === router.query.user_id ? (
        <>
          This is your page
          {JSON.stringify(session.data?.user)}
        </>
      ) : (
        <>This is not your page</>
      )}
    </Nav>
  );
};

export default UserPage;
