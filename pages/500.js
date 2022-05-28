import Link from "next/link";

export default function Custom500() {
  return (
    <div className=" flex flex-col text-center space-y-6">
      <h1 className="lg:text-3xl text-2xl font-black">
        We apologize for the inconvinience{" "}
      </h1>
      <div className=" text-xl font caret-black">
        {" "}
        The website is currently under mentenance
      </div>
      <Link href={"/subscription"}>
        <div className=" font-bold to-blue-600">
          Click here | Take This Step Unlock
        </div>
      </Link>
    </div>
  );
}
