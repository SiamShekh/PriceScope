"use client";

const Setting = () => {
    return (
        <div>
            <p className="text-xl text-white font-semibold">Settings</p>

            <div className="w-80">
                <div className="mt-2">
                    <p className="text-sm font-medium text-white/50">Name</p>
                    <input type="text" className="p-2 w-full h-10 text-white bg-white/10 mt-1 rounded-md outline-none" />
                </div>
                <div className="mt-2">
                    <p className="text-sm font-medium text-white/50">Email</p>
                    <input type="email" className="p-2 w-full h-10 text-white bg-white/10 mt-1 rounded-md outline-none" />
                </div>
                <div className="mt-2">
                    <p className="text-sm font-medium text-white/50">Joined At</p>
                    <input type="text" value={new Date().toLocaleString()} className="p-2 w-full h-10 text-white bg-white/10 mt-1 rounded-md outline-none" />
                </div>
                
                <div className="mt-2">
                    <p className="text-sm font-medium text-white/50">Locale</p>
                    <input type="text" value={"en"} className="p-2 w-full h-10 text-white bg-white/10 mt-1 rounded-md outline-none" />
                </div>

                <button className="bg-white/10 w-full mt-4 p-2 rounded-xl">Save</button>
            </div>

        </div>
    );
};

export default Setting;