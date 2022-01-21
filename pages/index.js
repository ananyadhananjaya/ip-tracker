import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Button } from "@material-ui/core";

export default function Home({ response }) {
  const [data, setData] = useState(null);

  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = () => {
    console.log(`http://ip-api.com/json/${search}`);
    if (search.length == 0) {
    } else {
      fetch(`http://ip-api.com/json/${search}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }

    console.log(data);
  };

  const handleEnterKey = (key) => {
    if (key.keyCode == 13) {
      handleSearch();
      console.log("enter");
    }
  };

  return (
    <div>
      <div className="flex justify-center m-3  text-3xl font-bold">
        IP Address Tracker
      </div>

      <div className="flex justify-center m-5 ">
        <div className="flex  ">
          <input
            type="text"
            className="px-4 py-2 border-2 border-gray-200 rounded-l-lg w-96"
            placeholder="Search for any IP address.."
            onChange={handleInput}
            onKeyDown={handleEnterKey}
          />
          <button
            className="px-4 text-slate-200 bg-black rounded-r-lg"
            onClick={handleSearch}
          >
            {">"}
          </button>
        </div>
      </div>

      {data? <div className="flex justify-center m-8">
        <div className="bg-slate-100 grid grid-cols-4 divide-x rounded-2xl">
          <div className=" grid justify-center p-5">
            <div className="font-mono text-sm">IP ADDRESS</div>
            <div className="font-sans font-bold text-base">{data.query}</div>
          </div>
          <div className=" grid justify-center p-5">
            <div className="font-mono text-sm">LOCATION</div>
            <div className="font-sans font-bold text-base">{data.regionName}</div>

          </div>
          <div className=" grid justify-center p-5 ">
            <div className="font-mono text-sm">TIMEZONE</div>
            <div className="font-sans font-bold text-base">{data.timezone}</div>

          </div>
          <div className=" grid justify-center p-5">
            <div className="font-mono text-sm">ISP</div>
            <div className="font-sans font-bold text-base">{data.isp}</div>

          </div>
        </div>
      </div>: ''}
    </div>
  );
}
