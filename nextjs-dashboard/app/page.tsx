export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 from-green-800 to-yellow-700 bg-gradient-to-b ">
      <div className="flex-box align-center text-center h-10 items-end rounded-md bg-green-700 p-2 md:h-20 border-2 border-yellow-800">
        <text className="font-semibold text-xl md:text-3xl text-slate-700">Western Pennsylvania Golf Course Ratings</text>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Featured Course</strong>
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Course Name Here as a link
            </a>
          </p>
          
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
