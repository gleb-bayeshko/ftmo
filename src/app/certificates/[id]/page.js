import { notFound } from "next/navigation.js";
import CertificateContent from "./content.js";
import { headers } from "next/headers";

export const metadata = {
  title: "Certificates | FTMO",
};

export default async function Certificate({ params }) {
  const { id } = await params;

  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "http";
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/certificates/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  return (
    <>
      <CertificateContent id={id} />
    </>
  );
}
