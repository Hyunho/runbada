import Image from 'next/image'



// declare directory list
type Event = {
  id: number,
  name: string,
  date: string,
  imageUrl: string,
  // add place field, but optional
  place?: string,
}

type Directory = {
  [key: string]: Event[],
}

const directory : Directory = {
  M03: [
    {
      id: 1,
      date: '2024-03-17',
      name: '2024 서울마라톤 겸 제94회 동아마라톤',
      place: '광화문, 잠실종합운동장',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  M10 : [
    {
      id: 2,
      date: '2024-10-27',
      name: '2024 조선일보 춘천마라톤',
      place: '춘천 공지천교',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      date: '2024-11-03',
      name: '2024 JTBC 서울마라톤',
      place: '상암월드컵공원',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

  ],
  
}

function Marathon() {
  return (
    <nav className="h-full overflow-y-auto" aria-label="Directory">
      {Object.keys(directory).map((letter) => (
        <div key={letter} className="relative">
          <div className="sticky top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-gray-50 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900">
            <h3>{letter}</h3>
          </div>
          <ul role="list" className="divide-y divide-gray-100">
            {directory[letter].map((person) => (
              <li key={person.email} className="flex gap-x-4 px-3 py-5">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <h1 className="text-4xl font-bold text-center mb-8">
        마라톤 대회
      </h1>
      <Marathon />
    </main>
  )
}
