import type { NextPage } from 'next'

const RegistrationPage: NextPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center py-2">
      <div className="flex w-[530px] flex-col rounded-2xl border border-zinc-300/70 bg-white">
        <header className="border-b border-zinc-200 py-6 px-8">
          <h1 className="text-center text-lg font-semibold text-gray-600">Create League</h1>
          <nav className="mt-4 flex w-full items-center justify-center">
            <nav className="grid grid-cols-4 gap-x-6">
              <span className="cursor-pointer text-gray-600">General</span>
              <span className="cursor-pointer text-gray-300">Members</span>
              <span className="cursor-pointer text-gray-300">Rules</span>
              <span className="cursor-pointer text-gray-300">Settings</span>
            </nav>
          </nav>
        </header>
        <form className="flex w-full justify-center px-12 pt-12 pb-16">
          <div className="w-full space-y-11">
            <div className="flex flex-col items-center justify-center space-y-3">
              <h2 className="text-zinc-600">League Logo</h2>
              <div className="aspect-video w-64 cursor-pointer rounded-xl bg-zinc-100/70 p-5 hover:bg-zinc-100">
                <div className="flex h-full w-full items-center justify-center border border-dashed border-zinc-400">
                  <span className="text-gray-400">Select a file</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  League Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="league-name"
                    id="league-name"
                    className="block w-full rounded-full border-gray-300 placeholder-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="The League of ordinary gentlemen"
                  />
                </div>
              </div>
              <div>
                <div className="flex w-full justify-between">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    User Name
                  </label>
                  <div className="-ml-8 inline-flex items-center">
                    <div className="flex h-5 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-xs">
                      <label htmlFor="comments" className="font-medium text-gray-700" />
                      <span id="comments-description" className="text-gray-500">
                        <span className="sr-only">New comments </span>Are you the league manager?
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="user-name"
                    id="user-name"
                    className="block w-full rounded-full border-gray-300 placeholder-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Ron Mexico"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end">
              <button
                type="button"
                className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Invite friends
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationPage
