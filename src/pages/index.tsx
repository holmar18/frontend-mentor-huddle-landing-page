import Image from "next/image";
import {Inter} from "next/font/google";
import BackDrop from "@/components/BackDrop";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <main className='flex flex-col items-center lg:pt-36 md:pt-28'>
      <div className='flex flex-col items-center text-center mx-36 md:mx-12 sm:pt-20 sm:mx-12'>
        <div className='animate-fade'>
          <h1 className='lg:text-4xl animate-scaleRotate md:text-3xl sm:text-xl'>
            Build The Community Your Fans Will Love
          </h1>
        </div>
        <div className='my-8 text-sm animate-fade lg:w-5/12 md:w-8/12 sm:w-full'>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
        </div>
        <div>
          <button className='w-56 h-12 text-white text-xs bg-pink border-pink border-2 transition-all shadow-md font-semibold animate-fade hover:shadow-none hover:scale-95 hover:border-lightPink hover:bg-lightPink'>
            Get Started For Free
          </button>
        </div>
      </div>

      {/* Screen Mockup */}
      <div className='relative isolate mx-36 md:mx-12 sm:pt-12 sm:mx-12'>
        <BackDrop />
        <Image
          alt='screen mockup'
          src={"/assets/screen-mockups.svg"}
          width={1035}
          height={739}
          className='lg:my-24 md:my-16 sm:my-12 animate-fade'
        />
        <BackDrop />
      </div>

      {/* Stats display */}
      <div className='flex flex-row justify-between animate-fade lg:w-6/12 md:w-9/12 md:mx-12 mx-36 sm:flex-col sm:pt-12 sm:mx-12'>
        <div className='sm:mb-12'>
          <Image
            alt='communities icon'
            src={"/assets/icon-communities.svg"}
            width={47}
            height={41}
          />
          <h1 className='text-5xl my-2 animate-pulse'>1.4K+</h1>
          <p className='text-sm text-gray-400 text-center'>
            Communities Formed
          </p>
        </div>

        <div>
          <Image
            alt='communities icon'
            src={"/assets/icon-messages.svg"}
            width={48}
            height={40}
          />
          <h1 className='text-5xl my-2 animate-pulse'>2.7m+</h1>
          <p className='text-sm text-gray-400 text-center'>Messages Sent</p>
        </div>
      </div>

      {/* Grow together section */}

      <div className='w-full pt-20 sm:py-4'>
        <div className='bg-blueCurveTopDesktop bg-cover h-40 w-full sm:bg-blueCurveTopMobile sm:h-24' />
        <div className='w-full bg-paleblue'>
          <MaxWidthWrapper>
            <div className='flex items-center text-center animate-fade sm:pt-8 sm:mx-12 sm:flex-col'>
              <div className='text-start lg:px-16 md:px-4 sm:pb-8 lg:w-6/12 md:w-6/12'>
                <h1 className='lg:text-4xl md:text-3xl sm:text-xl'>
                  Grow Together
                </h1>
                <p className='pt-4 text-sm'>
                  Generate meaningful discussion with your audience and build an
                  strong, loyal community. Think of the insightful conversation
                  you miss out on with a feedback form.
                </p>
              </div>
              <div className='lg:w-6/12 md:w-6/12'>
                <Image
                  alt='grow toghether'
                  src={"assets/illustration-grow-together.svg"}
                  width={1023.46}
                  height={837.84}
                />
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
        <div className='bg-blueCurveBotDesktop bg-cover h-40 w-full sm:bg-blueCurveBotMobile sm:h-24' />
      </div>

      {/* Flowing conversation */}
      <MaxWidthWrapper>
        <div className='flex items-center text-center animate-fade sm:py-8 sm:mx-12 sm:flex-col'>
          <div className='pb-8 lg:w-6/12 md:w-6/12'>
            <Image
              src={"assets/illustration-flowing-conversation.svg"}
              alt='flowing conversation'
              width={1125.12}
              height={800.94}
            />
          </div>
          <div className='text-start lg:w-6/12 lg:px-16 md:px-8 md:w-6/12'>
            <h1 className='lg:text-4xl md:text-3xl sm:text-xl'>
              Flowing Conversation
            </h1>
            <p className='pt-4 text-sm'>
              You would&apos;n paginate a conversation in real life, so why do
              it online? Our threads have just-in-time loading for a more
              natural flow.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Your Users section */}

      <div className='w-full pt-8 sm:py-4'>
        <div className='bg-blueCurveTopDesktopSc bg-cover h-40 w-full sm:bg-blueCurveTopMobileSc sm:h-24' />
        <div className='w-full bg-paleblue'>
          <MaxWidthWrapper>
            <div className='flex items-center text-center animate-fade sm:pt-8 sm:mx-12 sm:flex-col'>
              <div className='text-start lg:px-16 md:px-4 sm:pb-8 lg:w-6/12 md:w-6/12'>
                <h1 className='lg:text-4xl md:text-3xl sm:text-xl'>
                  Your Users
                </h1>
                <p className='pt-4 text-sm'>
                  It takes no time at all to integrate Huddle with your
                  app&apos;s authentication solution. This means, once signed in
                  to your app, your users can start chatting immediately.
                </p>
              </div>
              <div className='lg:w-6/12 md:w-6/12'>
                <Image
                  alt='grow toghether'
                  src={"assets/illustration-your-users.svg"}
                  width={1023.46}
                  height={837.84}
                />
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
        <div className='bg-blueCurveBotDesktopSc bg-cover h-40 w-full sm:bg-blueCurveBotMobileSc sm:h-24' />
      </div>

      <MaxWidthWrapper className='flex flex-col items-center text-center animate-fade pb-20 lg:mx-36 md:mx-12 sm:pt-20'>
        <h1 className='pb-12 animate-scaleRotate lg:text-4xl md:text-3xl sm:text-xl'>
          Ready To Build Your Community?
        </h1>
        <div>
          <button className='w-56 h-12 text-white text-xs bg-pink border-pink border-2 transition-all shadow-md font-semibold hover:shadow-none hover:scale-95 hover:border-lightPink hover:bg-lightPink'>
            Get Started For Free
          </button>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

