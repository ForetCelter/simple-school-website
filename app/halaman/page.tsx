import React from "react";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { FaHeart , FaBookReader , FaBookOpen , FaBook } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="min-h-screen text-black">
      <nav className="bg-red-600 shadow-xl p-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-white">SMK TELKOM MAKASSAR</h1>
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">OKTAVIANTO</span>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </nav>

      <main className="p-6 grid grid-cols-12 gap-6">
        <div className="col-span-9 flex flex-col gap-6">
          <div className="flex">
            <div className="bg-gray-50 rounded-lg shadow-lg flex-none">
              <div className="w-full bg-blue-50 p-1 rounded-sm flex justify-between items-center">
                <h1 className="text-lg pl-2 font-bold">Jurnal Mengajar</h1>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="tanggal"
                    id="tanggal"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <select
                    name="class"
                    id="class-select"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="rpl1">XI RPL 1</option>
                    <option value="rpl2">XI RPL 2</option>
                    <option value="rpl3">XI RPL 3</option>
                    <option value="rpl4">XI RPL 4</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 divide-x">
                <div className="p-4 flex items-center flex-col">
                  <h2 className="text-xl font-bold">Status Kehadiran</h2>
                  <div className="grid grid-cols-2 gap-10 text-lg text-gray-300">
                    <div className="flex items-center flex-col ">
                      <p className="">0</p>
                      <p>hadir</p>
                    </div>
                    <div className="flex items-center flex-col">
                      <p>0</p>
                      <p>tidak hadir</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center flex-col">
                  <h2 className="text-xl font-bold">Status Kehadiran</h2>
                  <div className="grid grid-cols-3 gap-10 text-lg text-gray-300">
                    <div className="flex items-center flex-col ">
                      <p className="">0</p>
                      <p>hadir</p>
                    </div>
                    <div className="flex items-center flex-col">
                      <p>0</p>
                      <p>tidak hadir</p>
                    </div>
                    <div className="flex items-center flex-col">
                      <p>0</p>
                      <p>tidak hadir</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md flex-2 m-2 flex items-center justify-center content-center gap-10">
              <div className="flex justify-center items-center content-center gap-10">
                <h1 className="text-center font-bold">
                  Guru Terbaik
                  <br />
                  <i>belum ada guru</i>
                </h1>
              </div>
              <div className="flex justify-center items-center m-1">
                <div className="">
                  <div className="w-14 h-14 bg-gray-300 rounded-full">
                    <Image
                      src="/idk.jpeg"
                      alt="asda"
                      width={248}
                      height={248}
                      className="rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 gap-6 h-[500px]">
            <div className="bg-gray-50 pb-6 rounded-xl shadow-2xl col-span-2 h-full flex flex-col">
              <div className="w-full bg-blue-50 mb-2 rounded-sm flex justify-start items-center ">
                <h2 className="font-bold text-lg p-2">News</h2>
              </div>
              <div className="flex gap-6 items-center justify-center flex-1">
                <div>
                  <div className="w-18 h-18 bg-indigo-900 flex flex-col items-center justify-center rounded-lg">
                    <FaBook />
                  </div>
                  <div className="text-center">
                    <span>Presensi</span>
                  </div>
                </div>
                <div>
                  <div className="w-18 h-18 bg-indigo-900 flex flex-col items-center justify-center rounded-lg">
                    <FaBookReader />
                  </div>
                  <div className="text-center">
                    <span>Presensi</span>
                  </div>
                </div>
                <div>
                  <div className="w-18 h-18 bg-indigo-900 flex flex-col items-center justify-center rounded-lg">
                    <FaBookOpen />
                  </div>
                  <div className="text-center">
                    <span>Presensi</span>
                  </div>
                </div>
                <div>
                  <div className="w-18 h-18 bg-indigo-900 flex flex-col items-center justify-center rounded-lg">
                    <FaBookOpen />
                  </div>
                  <div className="text-center">
                    <span>Presensi</span>
                  </div>
                </div>
                <div>
                  <div className="w-18 h-18 bg-indigo-900 flex flex-col items-center justify-center rounded-lg">
                    <FaBookOpen />
                  </div>
                  <div className="text-center">
                    <span>Presensi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 pb-4 rounded-xl shadow-2xl h-full">
              <div className="w-full bg-blue-50 mb-2 rounded-sm flex justify-start items-center ">
                <h2 className="font-bold text-lg p-2">Aplikasi</h2>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/monkey meme.jpeg"
                  alt="forever mine"
                  width={300}
                  height={300}
                  className="rounded-sm m-2"
                />
              </div>
              <div className="p-3">
                <h1 className="mb-1 font-bold">Apa ya??</h1>
                <hr />
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus quo temporibus est delectus ullam corrupti,
                    facilis sed expedita repudiandae sunt dolores eaque rerum
                    quod non enim animi fuga ipsum nihil!
                  </p>
                </div>
                <div className="mt-2">Ee kapan ya??</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">To Do List</div>
        </div>

        <div className="col-span-3 bg-white rounded-xl shadow-xl pb-4 flex flex-col">
          <div className="w-full bg-blue-50 mb-2 rounded-sm flex justify-start items-center ">
            <h2 className="font-bold text-lg p-2">Sapa Guru</h2>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4 p-2">
            <div className="bg-gray-100 p-4 rounded">
              <div className="flex">
                <div className="w-10 h-10 m-2 bg-gray-300 rounded-full">
                  <Image
                    src="/hmm.jpeg"
                    alt="asda"
                    width={248}
                    height={248}
                    className="rounded-md "
                  />
                </div>
                <div>
                  <h1 className="text-sm">Arifin</h1>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    20:20
                  </div>
                </div>
              </div>
              <p>Mana anakku namanya Eldyno brimulya</p>
              <div className="flex items-center mt-3">
                <div className="grid grid-cols-2 gap-20">
                  <div className="flex gap-2 text-sm"><FaHeart className="w-6 h-6"/> 100 Suka</div>
                  <div className="flex gap-2 text-sm"><CiClock2 className="w-6 h-6" /> 2 Jam yang lalu</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <div className="flex">
                <div className="w-10 h-10 m-2 bg-gray-300 rounded-full">
                  <Image
                    src="/idk.jpeg"
                    alt="asda"
                    width={248}
                    height={248}
                    className="rounded-md "
                  />
                </div>
                <div>
                  <h1 className="text-sm">Oktavianto</h1>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    20:20
                  </div>
                </div>
              </div>
              <p>Mana tugasmu anak anak</p>
              <div className="flex items-center mt-3">
                <div className="grid grid-cols-2 gap-20">
                  <div className="flex gap-2 text-sm"><FaHeart className="w-6 h-6"/> 100 Suka</div>
                  <div className="flex gap-2 text-sm"><CiClock2 className="w-6 h-6" /> 2 Jam yang lalu</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <div className="flex">
                <div className="w-10 h-10 m-2 bg-gray-300 rounded-full">
                  <Image
                    src="/watermelon.jpeg"
                    alt="asda"
                    width={248}
                    height={248}
                    className="rounded-md "
                  />
                </div>
                <div>
                  <h1 className="text-sm">Pajri</h1>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    20:20
                  </div>
                </div>
              </div>
              <p>Mana anakku yang namanya Althaf</p>
              <div className="flex items-center mt-3">
                <div className="grid grid-cols-2 gap-20">
                  <div className="flex gap-2 text-sm"><FaHeart className="w-6 h-6"/> 100 Suka</div>
                  <div className="flex gap-2 text-sm"><CiClock2 className="w-6 h-6" /> 2 Jam yang lalu</div>
                </div>
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Ketik sesuatu..."
            className="m-2 p-2 border rounded"
          />
        </div>
      </main>
    </div>
  );
}
