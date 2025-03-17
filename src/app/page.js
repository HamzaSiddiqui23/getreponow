import Head from "next/head";
import Link from "next/link";
import Image from "next/image";


export const metadata = {
  title: "Get Repo - Your AI powered online reputation management platform",
  description: "Get Repo your online reputation management platform to improve your online ratings, get more positive reviews, challenge and dispute negative reviews, run surveys and get more feedback from customer",
};

export default function Home() {
  return (
    <div>
      <div className="bg-cover bg-center flex flex-col items-center justify-center pt-24 md:pt-60" style={{ backgroundImage: "url('/backdrop.png')" }}>
        <Head>
          <title>Get Repo - Home</title>
          <meta name="description" content="Get Repo your online reputation management platform to improve your online ratings, get more positive reviews, challenge and dispute negative reviews, run surveys and get more feedback from customer" />
        </Head>

        {/* Hero */}
        <main className="flex justify-around px-6 md:px-30 w-full py-6">
          <div className="flex flex-col items-center md:items-start justify-center space-y-6 w-150 text-white text-wrap text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-semibold">Your One-Stop Online Reputation Management Platform</h1>
            <p className="md:text-lg font-medium">
            Managing reviews is time-consuming, but your reputation is priceless. GetRepo helps businesses like yours dispute negative reviews, respond professionally, and attract more positive reviews effortlessly.
            </p>
            <Link href="/contact" className="mt-5 px-6 py-3 bg-actions text-white rounded-xl hover:bg-actions-hover transition">
              Contact Sales
            </Link>
          </div>
          <div>
            <Image className="hidden md:block" src="/hero.png" alt="" width={750} height={750} />
          </div>
        </main>
        <div className="py-8 md:pt-48 md:text-3xl text-white">
          <span className="font-bold">Ready To Improve Your Online Ratings?</span>
        </div>
      </div>
      {/* White Section */}
      <div className="bg-cover bg-center flex flex-col items-center justify-center py-8 md:py-16" style={{ backgroundImage: "url('/white-backdrop.png')", backgroundRepeat: "repeat", backgroundSize: "1440px" }}>
        {/* Challenges */}
        <span className="text-black text-center text-xl md:text-3xl font-semibold px-6">Challenges of Managing Your Online Reputation</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-12 py-8 md:py-16 px-6 md:px-32">
          <div className="flex flex-col space-y-4 bg-actions p-6 rounded-2xl">
            <Image className="w-12" src="/fall.png" alt="Down" width={500} height={500}/>
            <span className="text-xl font-semibold">Lost Revenue</span>
            <span className="text-base font-medium text-wrap">Negative reivews can drive potential customers away</span>
          </div>
          <div className="flex flex-col space-y-4 bg-actions p-6 rounded-2xl">
            <Image className="w-12" src="/fieldtime.png" alt="" width={500} height={500}/>
            <span className="text-xl font-semibold">Time Consuming</span>
            <span className="text-base font-medium text-wrap">Responding to reviews takes time you don&apos;t have</span>
          </div>
          <div className="flex flex-col space-y-4 bg-actions p-6 rounded-2xl">
            <Image className="w-12" src="/frown.png" alt="" width={500} height={500}/>
            <span className="text-xl font-semibold">Lack of Expertise</span>
            <span className="text-base font-medium text-wrap">Knowing what to say to dissatisfied customers isn&apos;t easy</span>
          </div>
          <div className="flex flex-col space-y-4 bg-actions p-6 rounded-2xl">
            <Image className="w-12" src="/vector.png" alt="" width={500} height={500}/>
            <span className="text-xl font-semibold">Low review volume</span>
            <span className="text-base font-medium text-wrap">Not enough reviews to stand out from competitors</span>
          </div>
        </div>
        {/* Solutions */}
        <span className="text-black text-center text-xl md:text-3xl font-semibold px-6">Comprehensive Reputation Management Solutions</span>
        <div className="">
          <div className="w-full px-6 md:px-32 mt-8 md:pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary rounded-2xl py-6 px-6 flex flex-col md:flex-row items-center justify-around align-middle text-center">
              <div className="flex flex-col space-y-3">
                <span className="text-4xl font-bold text-white text-wrap text-center"><span className="text-actions">Review</span> Monitoring</span>
                <Image className="w-60 mx-auto" src="/monitor.png" alt="" width={500} height={500}/>
                <span className="text-2xl font-bold text-white text-wrap pb-2 md:pb-0">Stay informed with <span className="text-actions">real-time</span> alerts</span>
              </div>
            </div>
            <div className="bg-primary rounded-2xl py-6 px-6 flex flex-col md:flex-row items-center justify-around align-middle text-center">
              <div className="flex flex-col space-y-3 text-center">
                <span className="text-4xl font-bold text-white text-wrap text-center"><span className="text-actions">Response</span> Management</span>
                <Image className="w-60 mx-auto" src="/response_mgmt.png" alt="" width={500} height={500}/>
                <span className="text-2xl font-bold text-white text-wrap pb-2 md:pb-0"><span className="text-actions">Crafted</span> timely and proessional replies</span>
              </div>
            </div>
            <div className="bg-primary rounded-2xl py-6 px-6 flex flex-col md:flex-row items-center justify-around align-middle text-center">
              <div className="flex flex-col space-y-3">
                <span className="text-4xl font-bold text-white text-wrap text-center"><span className="text-actions">Review</span> Generation</span>
                <Image className="w-60 mx-auto" src="/generation.png" alt="" width={500} height={500}/>
                <span className="text-2xl font-bold text-white text-wrap pb-2 md:pb-0">Garner <span className="text-actions">new positive reivews</span> from your satisfied customer</span>
              </div>
            </div>
            <div className="bg-primary rounded-2xl py-6 px-6 flex flex-col md:flex-row items-center justify-around align-middle text-center">
              <div className="flex flex-col space-y-3">
                <span className="text-4xl font-bold text-white text-wrap text-center">Reporting & <span className="text-actions">Analytics</span></span>
                <Image className="w-60 mx-auto" src="/analytics.png" alt="" width={500} height={500}/>
                <span className="text-2xl font-bold text-white text-wrap pb-2 md:pb-0">Gain insights with detailed <span className="text-actions">performance metrics</span></span>
              </div>
            </div>
            <div className="bg-primary rounded-2xl py-6 px-6 flex flex-col md:flex-row items-center justify-around align-middle text-center">
              <div className="flex flex-col space-y-3">
                <span className="text-4xl font-bold text-white text-wrap text-center">Review <span className="text-actions">Disputes</span></span>
                <Image className="w-60 mx-auto" src="/disputes.png" alt="" width={500} height={500}/>
                <span className="text-2xl font-bold text-white text-wrap pb-2 md:pb-0">Tactically <span className="text-actions">dispute</span> all bad reviews</span>
              </div>
            </div>
            <div className="bg-primary rounded-2xl py-6 px-6 flex flex-col md:flex-row items-center justify-around align-middle text-center">
              <div className="flex flex-col space-y-3">
                <span className="text-4xl font-bold text-white text-wrap text-center"><span className="text-actions">Instant</span> Reviews</span>
                <Image className="w-60 mx-auto" src="/monitor.png" alt="" width={500} height={500}/>
                <span className="text-2xl font-bold text-white text-wrap pb-2 md:pb-0">Generate <span className="text-actions">instant reviews</span> by integrating with your systems</span>
              </div>
            </div>
          </div>
          {/* Solutions End */}
        </div>
      </div>
    </div>
  );
}