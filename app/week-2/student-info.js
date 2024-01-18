import Link from "next/link";

export default function StudentInfo() {
  const url = "https://github.com/ericjrbarbosa/cprg306-assignments";

  return (
    <div>
      <p>Eric Barbosa Jr.</p>
      <p>
        <Link href={url}>{url}</Link>
      </p>
    </div>
  );
}
