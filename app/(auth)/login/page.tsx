
import { Metadata } from "next";
import { UserAuthForm } from "./_components/user-auth-form";
export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <div className="mx-auto max-w-sm mt-40">
      <UserAuthForm />
    </div>
  )
}
