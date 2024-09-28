import { issuesData } from "@/app/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Issues() {
  const [issues, setIssues] = useState<[]>();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  const handleGetIssues = async () => {
    const res = await fetch("/api/issues", {
      method: "GET",
    });

    const data = await res.json();
    console.log("data from issues", data);
    setIssues(data.data);
  };

  useEffect(() => {
    handleGetIssues();
  }, []);

  return (
    <div className="pt-[60px] lg:pt-[75px] px-2">
      <div className="hidden lg:flex items-center gap-2 pt-4">
        <button className="border-2 border-[#01C909] rounded-xl py-1 px-2 text-center">
          <Link href="#">Vote Now</Link>
        </button>
        <button className="border-2 border-[#01C909] rounded-xl py-1 px-2 text-center">
          <Link href="#">View new laws</Link>
        </button>
        <button className="border-2 border-[#01C909] rounded-xl py-1 px-2 text-center">
          <Link href="#">Explore discussions</Link>
        </button>
      </div>

      {issues &&
        issues.map((issue: issuesData) => {
          return (
            <div key={issue.id} className="bg-[#f8f9fb] rounded-xl p-2 ">
              <p className="p-2 text-[18px] text-semibold">Parliament</p>

              <div className="bg-white rounded-xl p-2">
                <p className="text-[16px] text-semibold">
                  {issue.serial}:{issue.title}
                </p>
                <p className="text-[#a7a7ae] text-[14px]">{issue.content}</p>
                <p className="text-[#a7a7ae] text-[14px]">......</p>

                <p className="text-[#a7a7ae] text-[14px]">
                  Status:{" "}
                  <span className="text-bold text-[#000000]">
                    {issue.status}
                  </span>
                </p>
                <p className="text-[#a7a7ae] text-[14px]">
                  Deadline for voting:{" "}
                  <span className="text-bold text-[#000000]">
                    {issue.deadline}
                  </span>
                </p>

                <div className="flex items-center gap-2">
                  <button className="border-2 border-[#01C909] rounded-xl py-1 px-2 text-center">
                    <Link href="#">Read more</Link>
                  </button>
                  <button className="border-2 border-[#01C909] bg-[#01C909] rounded-xl py-1 px-2 text-center">
                    <Link href="#">Vote Now</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Issues;
