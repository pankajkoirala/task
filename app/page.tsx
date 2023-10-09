import { data } from "@/constant/data"
import Image from "next/image"
import dataExtraction from "@/assets/dataExtraction.png"
import dataFetching from "@/assets/dataFetching.png"
import dataQuality from "@/assets/dataQuality.png"
import dataTransformation from "@/assets/dataTransformation.png"
import reporting from "@/assets/reporting.png"
import EndToEndPlatform from "@/FeaturPages/EndToEndPlatform"

const images = {
  "DATA-FETCHING": dataFetching.src,
  "DATA-EXTRACTION": dataExtraction.src,
  "DATA-TRANSFORMATION": dataTransformation.src,
  "DATA-QUALITY": dataQuality.src,
  REPORTING: reporting.src,
}

export default function Home() {
  return (
    <main className="max-w-[1514px] m-auto px-[10px] mobile:p-4  tablet:p-4 flex justify-center bg-background w-full ">
      <EndToEndPlatform />
    </main>
  )
}
