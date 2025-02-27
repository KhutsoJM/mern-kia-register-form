const FormStepFour = () => {
    return (
        <div className="space-y-6">
            <div className="mt-1">
                <label className="block text-sm font-medium text-gray-700 pb-2">Name</label>
                <input
                    type="text" id="name" placeholder="name"
                    className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mt-1">
                <label className="block text-sm font-medium text-gray-700 pb-2">Surname</label>
                <input
                    type="text" id="surname" placeholder="surname"
                    className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mt-1">
                <label className="block text-sm font-medium text-gray-700 pb-2">Email</label>
                <input
                    type="email" id="email" placeholder="email"
                    className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mt-1">
                <label className="block text-sm font-medium text-gray-700 pb-2">Phone Number</label>
                <input
                    type="tel" id="number" placeholder="number"
                    className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mt-1">
                <label className="block text-sm font-medium text-gray-700 pb-2">Address</label>
                <input
                    type="text" id="address" placeholder="address"
                    className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
        </div>
    )
}