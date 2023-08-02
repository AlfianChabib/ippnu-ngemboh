import Image from "next/image";
import Me from "@/public/logo.jpg";

export default function Home() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Home
        </h1>
      </div>

      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            alt="Picture of jan marshal"
            src={Me}
            className="h-48 w-48 rounded-full object-cover"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            IPPNU Ngemboh
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
            Ikatan Pelajar Putri Nahdlatul Ulama Ranting Ngemboh
          </p>

          <div className="flex space-x-5 pt-6">
            <a
              href="https://www.instagram.com/pelajarnungemboh/"
              target="_blank"
              className="flex items-center "
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
              >
                <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100094599143704"
              target="_blank"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <p>
            Ikatan Pelajar Putri Nahdlatul Ulama atau disingkat IPPNU adalah
            organisasi kepelajaran yang berstatus sebagai badan otonom Nahdlatul
            Ulama.
          </p>
          <p>
            Organisasi ini lahir pada 2 Maret 1955 di Malang dengan pendiri
            sekaligus ketua umum pertamanya bernama Hj. Umroh Machfudzoh.
          </p>
          <p>
            Organisasi IPPNU berkonsentrasi pada pembinaan dan pengkaderan
            pelajar-pelajar putri NU yang masih duduk di bangku sekolah atau
            madrasah tingkat menengah dan tingkat atas, serta mahasiswi di
            tingkat perguruan tinggi.
          </p>
          <p>
            Fungsi organisasi IPNU-IPPNU sebagai badan otonom NU adalah sebagai
            wadah perhimpunan-nya para pelajar NU untuk melanjutkan semangat NU,
            menjalin hubungan dan menggalang Ukhuwah Islamiyah dalam
            mengembangkan syariat Islam serta menjadi tempat kaderisasi belajar
            yaitu sebagai kader-kader bangsa di masa yang akan datang.
          </p>
        </div>
      </div>
    </div>
  );
}
