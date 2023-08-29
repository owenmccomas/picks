import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Nav from "~/layouts";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.data?.user.id) {
      void router.push(`/u/${session.data?.user.id}`);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Your Picks</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-fg text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Picks
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>New Pick</CardTitle>
                <CardDescription>
                  Add yourself a merry little new pick
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Item</Label>
                    </div>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="tvshow">TV Show</SelectItem>
                          <SelectItem value="videogame">Video Game</SelectItem>
                          <SelectItem value="book">Book</SelectItem>
                          <SelectItem value="sport">Sport</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Nav>
    </>
  );
}
