import { data } from "@/constant/data"
import Image from "next/image"
import dataExtraction from "@/assets/dataExtraction.png"
import dataFetching from "@/assets/dataFetching.png"
import dataQuality from "@/assets/DataQuality.jpg"
import dataTransformation from "@/assets/dataTransformation.png"
import reporting from "@/assets/reporting.png"

const images = {
  "DATA-FETCHING": dataFetching.src,
  "DATA-EXTRACTION": dataExtraction.src,
  "DATA-TRANSFORMATION": dataTransformation.src,
  "DATA-QUALITY": dataQuality.src,
  REPORTING: reporting.src,
}

export default function EndToEndPlatform() {
  return (
    <section className=" w-[1208px] pt-[120px]  flex flex-col gap-[60px]  mobile:gap-[30px] tablet:gap-[30px] ">
      <div className="text-center text-h1 text-primary-black">
        End-to-end platform
      </div>
      <div className=" flex flex-col gap-[60px] mobile:gap-[30px] tablet:gap-[30px] items-center">
        {data.map((d) => (
          <div
            key={d.header}
            className="flex p-6   min-h-[477px] gap-[60px] mobile:gap-[30px] tablet:gap-[30px]  mobile:flex-col mobile:p-0"
          >
            <div className="flex flex-col gap-12 mobile:gap-6 tablet:gap-6  max-w-[345px] mobile:max-w-full tablet:max-w-full w-full">
              <div className="p-4 bg-background2 max-w-[325px] mobile:max-w-full tablet:max-w-full text-medium rounded-lg text-brand-primary">
                {d.title}
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-primary-black text-h2">{d.header}</div>
                <ol className=" flex flex-col gap-4">
                  {d?.lists.map((l) => (
                    <li className="text-normal text-secondary-black" key={l}>
                      {l}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div>
              <Image
                alt=""
                src={images[d.id as keyof typeof images]}
                height={0}
                width={0}
                sizes="100vh"
                className="w-[665px] h-[426px] object-cover  rounded-2xl mobile:h-[280px] mobile:w-full "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
